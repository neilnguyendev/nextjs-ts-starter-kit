import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';

import MainLayout from '@/components/Layouts/MainLayout';
import ListUsers from '@/components/PageComponents/Users/ListUsers';
import ListPosts from '@/components/PageComponents/Users/ListPosts';
// import configs from '@/configs';
import type { SagaStore } from '@/redux/store';
import { wrapper } from '@/redux/store';
// import authService from '@/services/auth';
import { fetchUsersRequest } from '@/services/users/redux/actions';
import styles from '@/styles/users.module.scss';
import { fetchPosts } from '@/services/posts/redux/actions';

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUsersRequest());
    // dispatch(fetchPosts());
  }, []);

  return (
    <MainLayout title="List users" description="Here are list of all users">
      <div className={styles.users}>
        <ListUsers />

        <h2 className={`mt-5 font-bold`}>List posts</h2>
        <ListPosts />
      </div>
    </MainLayout>
  );
}

// NOTE: [Recommended] getServerSideProps ALWAYS run. Even when reload page or click on link.
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // Check login
    // if (!authService.cookies.hasAccessToken({ req, res })) {
    //   return {
    //     redirect: {
    //       destination: configs.loginPath,
    //       permanent: false,
    //     },
    //   };
    // }

    // Get data
    await store.dispatch(fetchUsersRequest(true));
    await store.dispatch(fetchPosts(true));
    store.dispatch(END);
    await (store as SagaStore).sagaTask?.toPromise();

    return { props: {} };
  }
);

// NOTE: getStaticProps only run at the build time
// export const getStaticProps = wrapper.getStaticProps((store) => async () => {
//   console.log('getStaticProps');
//
//   await store.dispatch(fetchUsersRequest());
//
//   return { props: {} };
// });
