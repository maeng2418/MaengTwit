import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { AppLayout } from 'components';

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>회원가입 | MaengTwit</title>
      </Head>
      <AppLayout>
        <div>회원가입 페이지</div>
      </AppLayout>
    </>
  );
};

export default Signup;
