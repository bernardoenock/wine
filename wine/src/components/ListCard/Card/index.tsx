//
import * as S from "./styles"
import {IProductCard} from "../../../interfaces"
import {PrimaryButton} from "../../Button"
import Image from "next/image"

const Card: React.FC<IProductCard> = ({product}) => {
  return <>
  <S.CardContainer>
  {/* <Image src={product.image} alt={`imagem do vinho ${product.name}`} width={120} height={31} /> */}
<h2>{product.name}</h2>
<span>{product.price}</span>
<span>{product.discount}</span>
<p>SOCIO WINE</p><span>{product.priceMember}</span>
<p>NAO SOCIO</p><span>{product.priceNonMember}</span>
    <PrimaryButton>ADICIONAR</PrimaryButton>
  </S.CardContainer>
  </>;
};

export default Card;
