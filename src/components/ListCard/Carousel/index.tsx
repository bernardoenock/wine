import { Dispatch, SetStateAction } from "react";
import { IProduct } from "../../../interfaces";
import { PageButton } from "../../Button";
import { Ulist, Container } from "./styles";

interface IProp {
  page: IProduct[][];
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export default function Carousel({ page, setPageNumber }: IProp) {
  return (
    <Container>
      <Ulist>
        {page.map((_, index) => (
          <li key={index}>
            <PageButton onClick={() => setPageNumber(index)}>
              {index + 1}
            </PageButton>
          </li>
        ))}
      </Ulist>
    </Container>
  );
}
