import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

interface IUserProfileProps {
  setIsLoggedIn: (value: boolean) => void;
}

const UserProfile: React.FC<IUserProfileProps> = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로윙
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>M</Avatar>} title={'Maeng'} />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
