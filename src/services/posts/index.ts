import { listPosts } from '@/services/posts/mocks';
import type { IPost } from '@/services/posts/redux/types';

const postsService = {
  getPosts: (): IPost[] => {
    return listPosts;
  },
};

export default postsService;
