// 型を利用するためにインポート
import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import {ParsedUrlQuery} from "querystring";

type PostProps = {
  id: string;
};

const Post: NextPage<PostProps> = props => {
  const {id} = props;
  const router = useRouter();

  if (router.isFallback) {
    // フォールバックページ向けの表示を返す
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページである。
        </p>
        <p>{`PostId: ${id}`}</p>
      </main>
    </div>
  );
};

// getStaticPathsは生成したいページのパスパラメータの組み合わせを返す
// このファイルは[id].tsxなのでidを返す必要がある。
export const getStaticPaths: GetStaticPaths = async () => {
  // それぞれのパスパラメータをまとめたのものを返す
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ];
  // fallbackをflaseにすると404を返す。
  return {
    paths,
    fallback: false,
  };
};

// パラメータの型を定義
interface PostParams extends ParsedUrlQuery {
  id: string;
}

// getStaticPropsはパラメータを受け取る
export const getStaticProps: GetStaticProps<
  PostProps,
  PostParams
> = async context => {
  return {
    props: {
      id: context.params!["id"],
    },
  };
};

export default Post;
