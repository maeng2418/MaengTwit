// Application Container. 공통의 레이아웃을 작성
import 'antd/dist/antd.css';
import 'styles/nomalize.css';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Head>
        <title>MaengTwit</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default App;
