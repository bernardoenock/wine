import { useState } from "react";
import * as S from "./styles";

const FilterPrice: React.FC = () => {
  const [conditionPrice, setConditionPrice] = useState("");

  // const handleTest = () => {
  //   const radio = document.getElementsByName("radio");

  //   console.log(radio);

  // };
  console.log(conditionPrice);

  return (
    <S.ContainerFilter>
      <h3>Refine sua pesquisa</h3>
      <S.ContainerInput>
        <input
          type="radio"
          name="radio"
          value="ate40"
          onClick={() => setConditionPrice("ate40")}
        />
        Até R$40
      </S.ContainerInput>

      <S.ContainerInput>
        <input
          type="radio"
          name="radio"
          value="40a60"
          onClick={() => setConditionPrice("40a60")}
        />
        R$40 A R$60
      </S.ContainerInput>

      <S.ContainerInput>
        <input
          type="radio"
          name="radio"
          value="100a200"
          onClick={() => setConditionPrice("100a200")}
        />
        R$100 A R$200
      </S.ContainerInput>

      <S.ContainerInput>
        <input
          type="radio"
          name="radio"
          value="200a500"
          onClick={() => setConditionPrice("200a500")}
        />
        R$200 A R$500
      </S.ContainerInput>

      <S.ContainerInput>
        <input
          type="radio"
          name="radio"
          value="acima500"
          onClick={() => setConditionPrice("acima500")}
        />
        Acima de R$500
      </S.ContainerInput>
    </S.ContainerFilter>
  );
};

export default FilterPrice;
