import type {
  LOAD_USERS,
  LOADED_USERS_FAILURE,
  LOADED_USERS_SUCCESS,
} from '@/services/users/redux/actionTypes';

export interface IUser {
  id: number;
  email: string;
}

export interface UsersState {
  loaded: boolean;
  error: boolean;
  currentPage: number;
  total: number;
  limit: number;
  keyword: string;
  list: IUser[];
  isSSR: boolean;
}

export interface FetchUsersSuccessPayload {
  users: IUser[];
  total: number;
}

export interface FetchUsersFailurePayload {
  error: string;
}

export interface FetchUsersRequest {
  type: typeof LOAD_USERS;
  isSSR: boolean;
}

export type FetchUsersSuccess = {
  type: typeof LOADED_USERS_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
  type: typeof LOADED_USERS_FAILURE;
  payload: FetchUsersFailurePayload;
};
