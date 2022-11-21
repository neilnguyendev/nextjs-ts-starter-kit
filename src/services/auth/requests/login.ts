import configs from '@/configs';
import request from '@/utils/request';

export function login(data: any) {
  return request(`${configs.api}/auth/login`, null, {
    method: 'post',
    body: JSON.stringify({ email: data.email, password: data.password }),
  });
}
