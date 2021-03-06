/** @jsxImportSource @emotion/react */
import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useInput } from 'hooks';
import { useDispatch } from 'react-redux';
import { login } from 'store/slices/user';

const LoginForm: React.FC = () => {
  const buttonWrapper = css`
    margin-top: 10px;
  `;

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onSubmitForm = useCallback(() => {
    dispatch(
      login({
        id,
        password,
      }),
    );
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm}>
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
