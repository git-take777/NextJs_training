import {NextPage} from "next";
import Head from "next/head";

const EnvSample: NextPage = () => {
  // サーバーサイドで描写される際はtest1と表示されクライアントサイドで際描写する時はundefinedと表示される
  console.log("process.env.TEST", process.env.TEST);
  console.log("process.env.NEXT_PUBLIC_TEST", process.env.NEXT_PUBLIC_TEST);

  return (
    <div>
      <Head>
        <title>EnvSample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>process.env.TEST: {process.env.TEST}</p>
        <p>process.env.NEXT_PUBLIC_TEST: {process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  );
};

export default EnvSample;
