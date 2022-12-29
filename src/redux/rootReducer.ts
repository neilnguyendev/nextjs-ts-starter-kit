import { combineReducers } from 'redux';

import postsReducer from '@/services/posts/redux/reducer';
import usersReducer from '@/services/users/redux/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
