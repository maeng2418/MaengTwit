import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/slices/user';
import { State } from 'store';

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: State) => state.user);

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />
          {user?.Posts.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {user?.Followings.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {user?.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{user?.nickname[0]}</Avatar>} title={'Maeng'} />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
