import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';
import type { OptionsType } from 'cookies-next/src/types';

const ACCESS_TOKEN = 'accessToken';

export const cookies = {
  setAccessToken: (accessToken: string, options?: OptionsType): void => {
    setCookie(ACCESS_TOKEN, accessToken, options);
  },

  getAccessToken: (options?: OptionsType): string => {
    return <string>getCookie(ACCESS_TOKEN, options);
  },

  deleteAccessToken: (options?: OptionsType): void => {
    deleteCookie(ACCESS_TOKEN, options);
  },

  hasAccessToken: (options?: OptionsType): boolean => {
    return hasCookie(ACCESS_TOKEN, options);
  },
};
