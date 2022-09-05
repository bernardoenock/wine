import Head from "next/head";

import Header from "../components/Header";
import Products from "../components/Products";
import { Container, Main } from "../styles/Home/styles";

import { IDataProduct } from "../interfaces";

import { GetStaticProps } from "next";
import { loadProducts } from "../lib/load-products";

const Home = ({ data }: IDataProduct) => {
  localStorage.clear();
  const setData = JSON.stringify(data);
  localStorage.setItem("@Products:", setData);

  const teste = localStorage.getItem("@Products:");

  if (typeof teste === "string") {
    const parse = JSON.parse(teste);
    console.log("----->", parse);
  }

  return (
    <div>
      <Head>
        <title>WINE</title>
      </Head>
      <Container>
        <Header />
        <Main>
          <Products data={data} />
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
      data: data,
    },
    revalidate: 60 * 60 * 4,
  };
};
