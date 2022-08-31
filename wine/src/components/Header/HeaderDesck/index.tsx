import Link from "next/link";

import ThemeSelect from "../../ThemeSelect";
import { Header, HeaderDeskContainer } from "./styles";

const HeaderDesck: React.FC = () => (
  <HeaderDeskContainer>
    <Header>
      <Link href="/clube">Clube</Link>
      <Link href="/loja">Loja</Link>
      <Link href="/produtores">Produtores</Link>
      <Link href="/ofertas">Ofertas</Link>
      <Link href="/eventos">Eventos</Link>
    </Header>
    <ThemeSelect />
  </HeaderDeskContainer>
);

export default HeaderDesck;
