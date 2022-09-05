//
import * as S from "./styles";
import { IProductCard } from "../../../interfaces";
import { PrimaryButton } from "../../Button";

const Card: React.FC<IProductCard> = ({ product }) => {
  return (
    <S.Container>
      <S.CardContainer>
        <S.ImgProduct imgUrl={product.image}></S.ImgProduct>

        <S.ContainerInfo>
          <h2>{product.name}</h2>

          <S.PriceDiscont>
            <S.Price>
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </S.Price>
            <S.Discount>{product.discount}% OFF</S.Discount>
          </S.PriceDiscont>

          <S.Member>
            <p>SOCIO WINE</p>
            <span>
              {product.priceMember.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </S.Member>

          <S.NonMember>
            NAO SOCIO{" "}
            {product.priceNonMember.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </S.NonMember>
        </S.ContainerInfo>
      </S.CardContainer>

      <PrimaryButton>ADICIONAR</PrimaryButton>
    </S.Container>
  );
};

export default Card;
