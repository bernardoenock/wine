import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.backgroundColors.primaryBackground};

  /* @media screen and (max-height: 1024px) {
    width: 150%;
  } */

  @media screen and (max-height: 420px) {
    height: 100%;
  }
`;

export const Main = styled.main`
  width: 100vmax;
  height: 300%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 1% 10% 1%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Figure = styled.figure`
  width: 90%;
  max-width: 700px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 500px;
  > h1 {
    color: ${({ theme }) => theme.textColors.textColor01};
    font-weight: 800;
    font-size: 50px;
  }
  > p {
    color: ${({ theme }) => theme.textColors.textColor04};
    font-weight: 500;
    font-size: 24px;
  }

  > a {
    color: ${({ theme }) => theme.textColors.textColor01};
    font-weight: 800;
    font-size: 24px;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      width: 0;
      height: 3px;
      background: ${({ theme }) => theme.textColors.textColor01};
      transition: width 0.8s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
