import styled from "styled-components";

export const Container = styled.div`
  margin-top: 14rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TopList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 0.5px solid #d5d5d5;

  h3 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    margin-top: 1%;

    b {
      font-weight: 900;
    }

    color: ${({ theme }) => theme.textColors.textColor04};
  }
`;
