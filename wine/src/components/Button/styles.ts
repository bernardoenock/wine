import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 11.6806px 23.3612px;
  width: 256px;
  height: 39.36px;

  background-color: #7ebc43;

  box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
  border-radius: 3.89354px;
  button {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #ffffff;
    background-color: #7ebc43;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

export const PageButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  background-color: none;

  border: 1px solid #b6116e;
  border-radius: 3px;

  button {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    width: 100%;
    height: 100%;

    color: #b6116e;
  }
`;
