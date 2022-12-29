import configs from '@/configs';
import request from '@/utils/request';

export function getMe(token: string | null = null) {
  return request(`${configs.api}/users/me`, 'GET', { token });
}
