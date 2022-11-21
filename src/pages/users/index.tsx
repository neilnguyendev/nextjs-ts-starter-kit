import Link from 'next/link';

import MainLayout from '@/components/Layouts/MainLayout';
import styles from '@/styles/users.module.scss';

export default function Index() {
  return (
    <MainLayout title="List users" description="Here are list of all users">
      <div className={styles.users}>
        <Link href={'/register'}>Register</Link>
        <h1>Users / Index</h1>
        <p>List of users</p>
      </div>
    </MainLayout>
  );
}
