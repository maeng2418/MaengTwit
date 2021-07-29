import { NextPage } from 'next';
import { AppLayout } from 'components';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <div>Hello Next</div>
    </AppLayout>
  );
};

export default Home;
