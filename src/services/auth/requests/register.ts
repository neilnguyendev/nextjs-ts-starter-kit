import configs from '@/configs';
import request from '@/utils/request';

export function register(data: any) {
  return request(`${configs.api}/auth/register`, null, {
    method: 'post',
    body: JSON.stringify({ email: data.email, password: data.password }),
  });
}
