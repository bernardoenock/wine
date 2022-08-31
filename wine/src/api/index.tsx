import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    "https://wine-back-test.herokuapp.com/products?page=1&limit=10"
  );

  const data = await res.json();

  return {
    props: {
      products: data.items,
    },
  };
};
