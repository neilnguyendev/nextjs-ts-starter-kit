import type { Method } from 'axios';
import axios from 'axios';

import { HttpError } from '@/exceptions/HttpError';
import { UnauthorizedError } from '@/exceptions/UnauthorizedError';
import { cookies } from '@/services/auth/cookies';

const request = (url: string, method: Method, options: any = {}) => {
  const isCSR = typeof window !== 'undefined';
  const axiosExtraParams = { ...options };
  let headers: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
    delete axiosExtraParams.token;
  } else if (isCSR) {
    const accessToken = cookies.getAccessToken();
    if (accessToken) {
      headers.Authorization = `Bearer ${cookies.getAccessToken()}`;
    }
  }

  if (options.headers) {
    headers = { ...headers, ...options.headers };
    delete axiosExtraParams.headers;
  }

  return axios({
    url,
    method,
    headers,
    ...axiosExtraParams,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        // Auto redirect
        // if (isCSR) {
        //   window.location.href = '/';
        // }
        throw new UnauthorizedError();
      } else {
        throw new HttpError(error.response.data?.message);
      }
    });
};

export default request;
