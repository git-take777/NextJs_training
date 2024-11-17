import {GetStaticProps, NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = props => {
  const {message} = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Head>
        <title>Incremental Static Regeneration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによって生成されたページである。</p>
        <p>{message}</p>
        <Link href="/">Topへ戻る</Link>
        <Link href="/ssg">SSGへ移動する</Link>
        <Link href="/ssr">
          <button>Jump to SSR page</button>
        </Link>
      </main>
    </div>
  );
};
export const getStaticProps: GetStaticProps<ISRProps> = async () => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetSTaticPropsが実行されました`;

  return {
    props: {
      message,
    },
    revalidate: 60,
  };
};

// // routerを使ったPage遷移方法
// const router = useRouter();

// // pageがリロードされた際に実行
// router.reload();

// // 呼ぶと前のpageに戻る
// router.back();

// // 遷移開始時のイベントを購読
// router.events.on("routeChangeStart", (url, shallow) => {
//   // shallowはシャロールーティングの場合はtrueを返す
// });
// // 遷移完了時のイベントを購読します
// router.events.on("routeChangeComplete", (url, shallow) => {
//   // shallowはシャロールーティングの場合はtrueを返す
// });
export default ISR;
