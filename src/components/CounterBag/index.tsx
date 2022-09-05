import * as S from "./styles";
const CounterBag: React.FC = () => {
  return (
    <S.CardCounter>
      <S.Bag></S.Bag>
      <S.Counter>
        <p>0</p>
      </S.Counter>
    </S.CardCounter>
  );
};

export default CounterBag;
