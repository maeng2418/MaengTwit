/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { css } from '@emotion/react';

const buttonWrapper = css`
  margin-top: 10px;
`;

const LoginForm: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 컴포넌트에 Props로 넘겨주는 함수는 useCallback을 써서 최적화하자!!
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type={'password'}
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div css={buttonWrapper}>
        <Button type={'primary'} htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
