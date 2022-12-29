import { LOAD_POSTS } from '@/services/posts/redux/actionTypes';

import type { FetchPostsRequest } from './types';

export const fetchPosts = (isSSR = false): FetchPostsRequest => ({
  type: LOAD_POSTS,
  isSSR,
});
