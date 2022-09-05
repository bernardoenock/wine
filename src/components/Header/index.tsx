import HeaderDesck from "./HeaderDesck";
import HeaderMobile from "./HeaderMobile";

import { Header } from "./styles";

const HeaderHome: React.FC = () => {
  return (
    <Header>
      <HeaderDesck />
      <HeaderMobile />
    </Header>
  );
};
export default HeaderHome;
