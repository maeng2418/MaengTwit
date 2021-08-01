/** @jsxImportSource @emotion/react */
import { useState, useCallback } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from 'components';
import { Form, Input, Checkbox, Button } from 'antd';
import { useInput } from 'hooks';
import { css } from '@emotion/react';

const Signup: NextPage = () => {
  const errorStyle = css`
    color: red;
  `;
  const submitButtonWrapperStyle = css`
    margin-top: 10px;
  `;
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');

  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(`${id}: ${nickname}님 가입 완료!`);
  }, [password, passwordCheck, term]);

  return (
    <>
      <Head>
        <title>회원가입 | MaengTwit</title>
      </Head>
      <AppLayout>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호 확인</label>
            <br />
            <Input
              name="user-password-chekc"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && <div css={errorStyle}>비밀번호가 일치하지 않습니다.</div>}
            <div>
              <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                이용 약관에 동의합니다.
              </Checkbox>
              {termError && <div css={errorStyle}>이용약관에 동의하셔야 합니다.</div>}
            </div>
            <div css={submitButtonWrapperStyle}>
              <Button type={'primary'} htmlType={'submit'}>
                가입하기
              </Button>
            </div>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
