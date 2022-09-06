import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Ulist = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const TopList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-right: 10%;

  width: 100%;
`;

export const Total = styled.h3`
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
`;
