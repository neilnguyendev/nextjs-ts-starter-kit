import { HYDRATE } from 'next-redux-wrapper';
import type { AnyAction } from 'redux';

import postsService from '@/services/posts';
import type { IPost, PostsState } from '@/services/posts/redux/types';

import { LOAD_POSTS } from './actionTypes';

// The initial state of the App
const initialState: PostsState = {
  loaded: false,
  error: false,
  currentPage: 1,
  total: 0,
  limit: 0,
  keyword: '',
  list: [],
  isSSR: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.posts.isSSR
        ? { ...action.payload.posts }
        : { ...state };
    case LOAD_POSTS: {
      const posts: IPost[] = postsService.getPosts();
      return { ...state, loaded: true, list: posts, isSSR: action.isSSR };
    }
    default:
      return state;
  }
};
