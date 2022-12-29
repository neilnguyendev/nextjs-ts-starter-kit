import { HYDRATE } from 'next-redux-wrapper';
import type { AnyAction } from 'redux';

import type { UsersState } from '@/services/users/redux/types';

import {
  LOAD_USERS,
  LOADED_USERS_FAILURE,
  LOADED_USERS_SUCCESS,
} from './actionTypes';

// The initial state of the App
const initialState: UsersState = {
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
export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case HYDRATE:
      return action.payload.users.isSSR
        ? { ...action.payload.users }
        : { ...state };
    case LOAD_USERS:
      return { ...state, loaded: false, isSSR: action.isSSR };
    case LOADED_USERS_SUCCESS:
      return {
        ...state,
        loaded: true,
        list: action.payload.users,
        total: action.payload.total,
        error: null,
      };
    case LOADED_USERS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
