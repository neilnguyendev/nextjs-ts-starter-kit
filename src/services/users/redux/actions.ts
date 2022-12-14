import {
  LOAD_USERS,
  LOADED_USERS_FAILURE,
  LOADED_USERS_SUCCESS,
} from './actionTypes';
import type {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
} from './types';

export const fetchUsersRequest = (isSSR = false): FetchUsersRequest => ({
  type: LOAD_USERS,
  isSSR,
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: LOADED_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: LOADED_USERS_FAILURE,
  payload,
});
