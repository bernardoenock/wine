import { IDataProduct } from "../../interfaces";
import FilterPrice from "../FilterPrice";
import ListCard from "../ListCard";

import { useEffect, useState } from "react";

import * as S from "./styled";

const Products: React.FC = () => {
  const [dataProducts, setDataProducts] = useState<IDataProduct>();
  let verify: string | null;
  verify = localStorage.getItem("@Products:");
  useEffect(() => {
    if (verify) {
      const data = {
        data: JSON.parse(verify),
      };
      setDataProducts(data);
    }
  }, [verify]);

  return (
    <>
      {dataProducts ? (
        <S.Container>
          <FilterPrice />
          <S.ContainerProduct>
            <ListCard data={dataProducts.data} />
          </S.ContainerProduct>
        </S.Container>
      ) : (
        <>Carregando...</>
      )}
    </>
  );
};

export default Products;
