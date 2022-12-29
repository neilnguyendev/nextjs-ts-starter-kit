import { listUsers } from '@/services/users/mocks';
import type { IUser } from '@/services/users/redux/types';

import * as requests from './requests';

const usersService = {
  getUsers: (): IUser[] => {
    return listUsers;
  },

  requests,
};

export default usersService;
