import { combineReducers } from 'redux';

import usersReducer from '@/services/users/redux/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
