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
            <S.Price>R${product.price}</S.Price>
            <S.Discount>{product.discount}% OFF</S.Discount>
          </S.PriceDiscont>

          <S.Member>
            <p>SOCIO WINE</p>
            <span>R${product.priceMember}</span>
          </S.Member>

          <S.NonMember>NAO SOCIO R${product.priceNonMember}</S.NonMember>
        </S.ContainerInfo>
      </S.CardContainer>

      <PrimaryButton>ADICIONAR</PrimaryButton>
    </S.Container>
  );
};

export default Card;
