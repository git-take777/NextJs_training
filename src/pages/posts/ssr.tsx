import {GetServerSideProps, NextPage} from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = props => {
  const {message} = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはSSRによって生成されたページである。</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => {
  const timeStamp = new Date().toLocaleString();
  const message = `${timeStamp}にgetServerSidePropsが実行されました。`;
  console.log(message);
  return {
    props: {
      message,
    },
  };
};

export default SSR;
