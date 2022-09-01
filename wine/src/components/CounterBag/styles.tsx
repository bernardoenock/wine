import styled from "styled-components";

import BagUrl from "../../assets/bag.png";

export const CardCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #f6b554;
  background-color: #f6b554;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  box-shadow: 1px 2.5px 5px black;
`;

export const Bag = styled.div`
  background-image: url(${BagUrl.src});
  background-repeat: no-repeat;
  background-position: center;
  width: 48px;
  height: 50px;
  border-radius: 0 0 100% 100%;
`;

export const Counter = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;

  margin: 34px 0 0 30px;

  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};

  border-radius: 50%;

  box-shadow: 1px 2.5px 5px black;
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    margin-top: 1px;

    color: #4fbfa5;
  }
`;
