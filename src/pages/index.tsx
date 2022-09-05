import Head from "next/head";

import Header from "../components/Header";
import Products from "../components/Products";
import { Container, Main } from "../styles/Home/styles";

import { IDataProduct } from "../interfaces";

import { GetStaticProps } from "next";
import { loadAllProducts, loadProductsPerPage } from "../lib/load-products";

export const getStaticProps: GetStaticProps = async () => {
  const data = await loadAllProducts();

  return {
    props: {
      data: data,
    },
    revalidate: 60 * 60 * 4,
  };
};

const Home = ({ data }: IDataProduct) => {
  localStorage.clear();
  const setData = JSON.stringify(data);
  localStorage.setItem("@Products:", setData);

  return (
    <div>
      <Head>
        <title>WINE</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Products />
        </Main>
      </Container>
    </div>
  );
};

export default Home;
