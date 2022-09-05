import { useState } from "react";
import { IDataProduct, IProduct } from "../../interfaces";
import { pagination } from "../../utils/pagination";

import Card from "./Card";
import Carousel from "./Carousel";
import { Container, TopList, Total, Ulist } from "./styles";

interface IListProducts {
  products: IProduct[];
}

export default function ListCard({ data }: IDataProduct) {
  const [pageNumber, setPageNumber] = useState(0);

  const page = pagination(data.items, 9);

  return (
    <Container>
      <TopList>
        <Total>
          <b>{data.totalItems}</b> produtos encontrados
        </Total>
        <Carousel page={page} setPageNumber={setPageNumber} />
      </TopList>

      <Ulist>
        {page[pageNumber].map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </Ulist>
    </Container>
  );
}
