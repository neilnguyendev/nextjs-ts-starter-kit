import { useSelector } from 'react-redux';

import type { AppState } from '@/redux/rootReducer';
import type { IPost } from '@/services/posts/redux/types';

export default function ListUsers() {
  const { list } = useSelector((state: AppState) => state.posts);

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
            {list.map((post: IPost) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.name}</td>
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
