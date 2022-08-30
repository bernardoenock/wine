import { NextPage } from "next";
import Head from "next/head";
import ThemeSelect from "../components/ThemeSelect";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WINE</title>
      </Head>
      <h1>WINE</h1>
      <ThemeSelect />
    </div>
  );
};

export default Home;
