import {GetStaticProps, NextPage} from "next";
import Head from "next/head";

type SSGProps = {
  message: string;
};

// 静的サイト生成によってビルド時に生成されたページ
const SSG: NextPage<SSGProps> = props => {
  const {message} = props;
  return (
    <div>
      {/* Headコンポーネントで包むと、その要素は<head>タグに配置される */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページである。
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async () => {
  const timeStamp = new Date().toLocaleString();
  const message = `${timeStamp}にgetSTaticPropsが実行されました。`;
  console.log(message);
  return {
    // ここで返したpropsをもとに描写される
    props: {
      message,
    },
  };
};

export default SSG;
