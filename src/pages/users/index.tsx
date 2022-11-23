import Router from 'next/router';
import { useSelector } from 'react-redux';

import MainLayout from '@/components/Layouts/MainLayout';
import configs from '@/configs';
import authService from '@/services/auth';
import styles from '@/styles/users.module.scss';
import { fetchUsersRequest } from '@/services/users/redux/actions';
import { wrapper } from '@/redux/store';
import type { AppState } from '@/redux/rootReducer';
import type { UsersState } from '@/services/users/redux/types';
import { END } from 'redux-saga';

function Index() {
  const { list } = useSelector<AppState, UsersState>(
    (store: AppState) => store.users
  );

  console.log('list', list);

  return (
    <MainLayout title="List users" description="Here are list of all users">
      <div className={styles.users}>
        {list.length > 0 ? (
          <table className="table-auto">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {list.map((user) => (
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
      </div>
    </MainLayout>
  );
}

Index.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    async ({ req, res }) => {
      if (!authService.cookies.hasAccessToken({ req, res })) {
        if (res) {
          res.writeHead(302, { Location: configs.loginPath });
          return res.end();
        }

        return Router.replace(configs.loginPath);
      }

      store.dispatch(fetchUsersRequest());

      if (res) {
        store.dispatch(END);
        await store.sagaTask.toPromise();
      }

      console.log('aaaa');
      return { props: {} };
    }
);

export default Index;
