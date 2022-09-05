import Image from "next/image";
import Link from "next/link";

import Logo from "../../../assets/logo.png";

import ThemeSelect from "../../ThemeSelect";
import * as S from "./styles";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import CounterBag from "../../CounterBag";
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
      <S.BagButton>
        <CounterBag />
      </S.BagButton>
    </S.Header>
    <ThemeSelect />
  </S.HeaderDeskContainer>
);

export default HeaderDesck;
