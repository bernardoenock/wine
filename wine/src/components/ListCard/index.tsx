import { IProduct } from "../../interfaces";

import Card from "./Card";
import { Container, Ulist } from "./styles";

interface IListProducts {
  products: IProduct[];
}

export default function ListCard({ products }: IListProducts) {
  return (
    <Container>
      <Ulist>
        {products.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </Ulist>
    </Container>
  );
}
