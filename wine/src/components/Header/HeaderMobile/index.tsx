import Link from "next/link";
import { useState } from "react";

import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import * as S from "./styles";
import Image from "next/image";
import Logo from "../../../assets/logo.png";

import ThemeSelect from "../../ThemeSelect";
import CounterBag from "../../CounterBag";
import BurguerMobile from "../../BurguerMobile";

const HeaderMobile: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const heandleMenu = () => {
    setMenu(!menu);
  };

  return (
    <S.HeaderMobileContainer>
      {menu ? (
        <S.Header>
          <Link href="/clube">Clube</Link>
          <Link href="/loja">Loja</Link>
          <Link href="/produtores">Produtores</Link>
          <Link href="/ofertas">Ofertas</Link>
          <Link href="/eventos">Eventos</Link>
          <IoClose size="50px" onClick={heandleMenu} />
        </S.Header>
      ) : (
        <S.HeaderNone>
          <S.ContainerLeft>
            <S.BurguerMobile>
              <BurguerMobile click={heandleMenu}></BurguerMobile>
            </S.BurguerMobile>
            <S.ContainerLogo>
              <Image src={Logo} alt="Logo da Wine" width={100} height={40} />
              <S.ThemeConteiner>
                <ThemeSelect />
              </S.ThemeConteiner>
            </S.ContainerLogo>
          </S.ContainerLeft>
          <S.ContainerRigth>
            <S.IconSearch>
              <AiOutlineSearch />
            </S.IconSearch>
            <CounterBag />
          </S.ContainerRigth>
        </S.HeaderNone>
      )}
    </S.HeaderMobileContainer>
  );
};

export default HeaderMobile;
