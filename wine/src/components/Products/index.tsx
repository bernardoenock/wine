import { IDataProduct } from "../../interfaces";
import FilterPrice from "../FilterPrice";
import ListCard from "../ListCard";

import * as S from "./styled";

const Products: React.FC<IDataProduct> = ({ data }) => {
  return (
    <S.Container>
      <FilterPrice />
      <S.ContainerProduct>
        <S.Total>
          <b>{data.totalItems}</b> produtos encontrados
        </S.Total>

        <ListCard products={data.items} />
      </S.ContainerProduct>
    </S.Container>
  );
};

export default Products;
