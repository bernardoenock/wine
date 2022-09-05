import { IDataProduct } from "../../interfaces";
import Card from "../ListCard/Card";

import * as S from "./styles";

export default function ListCardMobile({ data }: IDataProduct) {
  return (
    <S.Container>
      <S.TopList>
        <h3>
          <b>{data.totalItems}</b> produtos encontrados
        </h3>
      </S.TopList>

      <ul>
        {data.items.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </S.Container>
  );
}
