import styled from "styled-components";

export const ContainerFilter = styled.div`
  width: 40rem;
  height: 300px;
  margin: 3rem;
  h3 {
    font-family: "Neo Sans Std", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: ${({ theme }) => theme.textColors.textColor01};
  }

  p {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;

    margin: 2rem 0 1rem 0;

    color: ${({ theme }) => theme.textColors.textColor05};
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ContainerInput = styled.div`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  margin-bottom: 1rem;

  color: ${({ theme }) => theme.textColors.textColor03};
`;
