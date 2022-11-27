import { useSelector } from 'react-redux';

import type { AppState } from '@/redux/rootReducer';
import type { IUser } from '@/services/users/redux/types';

export default function ListUsers() {
  const { list } = useSelector((state: AppState) => state.users);

  return (
    <>
      {list.length > 0 ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user: IUser) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records</p>
      )}
    </>
  );
}
