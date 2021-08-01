import { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout, NicknameEditForm, FollowList } from 'components';

const Profile: NextPage = () => {
  const followingList = [
    { nickname: 'Maeng Kim' },
    { nickname: 'Aesop Kim' },
    { nickname: 'Mick Lee' },
  ];
  const followerList = [
    { nickname: 'Maeng Kim' },
    { nickname: 'Aesop Kim' },
    { nickname: 'Mick Lee' },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | MaengTwit</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
