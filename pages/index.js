import Head from "next/head";
import Header from "./components/Header";
import style from "../style/index.less";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Cool App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={style.main}>
          <h1 className="title">Welcome to My App</h1>
          <Header />
        </div>
      </main>
    </div>
  );
}
