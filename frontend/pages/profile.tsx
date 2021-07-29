import { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from 'components';

const Profile: NextPage = () => {
  return (
    <AppLayout>
      <Head>
        <title>내 프로필 | MaengTwit</title>
      </Head>
      <div>내 프로필</div>
    </AppLayout>
  );
};

export default Profile;
