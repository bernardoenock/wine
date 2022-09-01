import Link from "next/link";
import { useState } from "react";

import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderMobileContainer, HeaderNone, Header } from "./styles";

import ThemeSelect from "../../ThemeSelect";

const HeaderMobile: React.FC = () => {
  const [menu, setMenu] = useState(false);

  const heandleMenu = () => {
    setMenu(!menu);
  };

  return (
    <HeaderMobileContainer>
      {menu ? (
        <Header>
          <Link href="/clube">Clube</Link>
          <Link href="/loja">Loja</Link>
          <Link href="/produtores">Produtores</Link>
          <Link href="/ofertas">Ofertas</Link>
          <Link href="/eventos">Eventos</Link>
          <IoClose size="30px" onClick={heandleMenu} />
        </Header>
      ) : (
        <HeaderNone>
          <ThemeSelect />
          <GiHamburgerMenu size="30px" onClick={heandleMenu} />
        </HeaderNone>
      )}
    </HeaderMobileContainer>
  );
};

export default HeaderMobile;
