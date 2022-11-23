import { listUsers } from '@/services/users/mocks';
import type { IUser } from '@/services/users/redux/types';

const usersService = {
  getUsers: (): IUser[] => {
    // Simulator for request API
    setTimeout(() => {}, 2000);

    return listUsers;
  },
};

export default usersService;
