import { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import { Container, Main } from "../styles/Home/styles";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WINE</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <h1>WINEsss</h1>
        </Main>
      </Container>
    </div>
  );
};

export default Home;
