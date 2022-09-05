import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  const prod = router.query.id;

  return (
    <>
      <h1>Produto selecionado: {prod}</h1>
    </>
  );
};

export default Product;
