import Image from "next/image";
import Link from "next/link";

import Logo from "../../../assets/logo.png";
import Bag from "../../../assets/bag.png";

import ThemeSelect from "../../ThemeSelect";
import * as S from "./styles";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
const HeaderDesck: React.FC = () => (
  <S.HeaderDeskContainer>
    <S.Header>
      <Image src={Logo} alt="Logo da Wine" width={120} height={31} />

      <Link href="/clube">Clube</Link>
      <Link href="/loja">Loja</Link>
      <Link href="/produtores">Produtores</Link>
      <Link href="/ofertas">Ofertas</Link>
      <Link href="/eventos">Eventos</Link>
      <S.CircleIcons>
        <AiOutlineSearch />
      </S.CircleIcons>
      <S.CircleIcons>
        <AiOutlineUser />
      </S.CircleIcons>
      <S.CardCounter>
        {/* <Image
          src={Bag}
          alt="Sacola de compras, produtos na sacola: X"
          width={45}
          height={40}
        /> */}
        <S.Bag></S.Bag>
      </S.CardCounter>
    </S.Header>
    <ThemeSelect />
  </S.HeaderDeskContainer>
);

export default HeaderDesck;
