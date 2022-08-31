import { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import ListCard from "../components/ListCard";
import { Container, Main } from "../styles/Home/styles";

import { IProductResponse } from "../interfaces";

import { GetStaticProps } from "next";
import { loadProducts } from "../lib/load-products";

const Home = ({ products }: IProductResponse) => {
  return (
    <div>
      <Head>
        <title>WINE</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <h1>WINEsss</h1>
          <ListCard products={products} />
        </Main>
      </Container>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await loadProducts();

  return {
    props: {
      products: data.items,
    },
    revalidate: 60 * 60 * 4,
  };
};
