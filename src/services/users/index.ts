import { listUsers } from '@/services/users/mocks';
import type { IUser } from '@/services/users/redux/types';

const usersService = {
  getUsers: (): IUser[] => {
    return listUsers;
  },
};

export default usersService;
