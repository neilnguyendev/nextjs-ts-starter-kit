import configs from '@/configs';
import request from '@/utils/request';

export function login(data: any) {
  return request(`${configs.api}/auth/login`, 'POST', { data });
}
