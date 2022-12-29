import type { LOAD_POSTS } from '@/services/posts/redux/actionTypes';

export interface IPost {
  id: number;
  name: string;
}

export interface PostsState {
  loaded: boolean;
  error: boolean;
  currentPage: number;
  total: number;
  limit: number;
  keyword: string;
  list: IPost[];
  isSSR: boolean;
}

export interface FetchPostsRequest {
  type: typeof LOAD_POSTS;
  isSSR: boolean;
}
