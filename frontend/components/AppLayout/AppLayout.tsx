/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';
import { LoginForm, UserProfile } from 'components';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { State } from 'store';

interface IAppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<IAppLayoutProps> = ({ children }) => {
  const searchInput = css`
    vertical-align: middle;
  `;

  const { isLoggedIn } = useSelector((state: State) => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton css={searchInput} />
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* 
        xs: 모바일
        sm: 태블릿
        md: 작은 데스크탑

        gutter: 사이 간격
      */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          {/* targer="_blank" 적용시 보안위협을 막기 위해 rel="noreferrer noopener" 같이 적어준다. */}
          <a href="https://github.com/maeng2418" target="_blank" rel="noreferrer noopener">
            Made by Maeng
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
