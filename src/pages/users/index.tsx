import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import MainLayout from '@/components/Layouts/MainLayout';
import configs from '@/configs';
import authService from '@/services/auth';
import styles from '@/styles/users.module.scss';
import { fetchUsersRequest } from '@/services/users/redux/actions';
import { wrapper } from '@/redux/store';
import type { UsersState } from '@/services/users/redux/types';

function Index() {
  const router = useRouter();
  const { error, keyword, limit, list, loaded, total, currentPage } =
    useSelector<UsersState>((state) => state);
  console.log('users', list);

  return (
    <MainLayout title="List users" description="Here are list of all users">
      <div className={styles.users}>
        <a
          className="cursor-pointer"
          onClick={async () => {
            authService.cookies.deleteAccessToken();
            await router.push(configs.loginPath);
          }}
        >
          Logout
        </a>
      </div>
    </MainLayout>
  );
}

Index.getInitialProps = wrapper.getInitialPageProps(
  (store) =>
    ({ req, res }) => {
      if (!authService.cookies.hasAccessToken({ req, res })) {
        if (res) {
          res.writeHead(302, { Location: configs.loginPath });
          return res.end();
        }

        return Router.replace(configs.loginPath);
      }

      store.dispatch(fetchUsersRequest());
    }
);

export default Index;
