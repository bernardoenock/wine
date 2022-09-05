import * as S from "./styles";

const BurguerMobile: React.FC<{
  click: any;
}> = ({ click }) => {
  return (
    <S.ButtonContainer onClick={click}>
      <div></div>
      <div></div>
      <div></div>
    </S.ButtonContainer>
  );
};

export default BurguerMobile;
