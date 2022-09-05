import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  cursor: pointer;

  & > div {
    width: 35px;
    height: 0.2rem;
    background-color: #1d1d1b;
    border-radius: 30%;
  }

  &:hover {
    & > div {
      width: 40px;
      height: 0.3rem;
    }
  }
`;
