import styled from "styled-components";

export const HeaderMobileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeaderNone = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;

  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};

  > svg {
    color: ${({ theme }) => theme.buttonColor.primaryButton};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 10px 20px;
  height: 16rem;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);

  > a {
    margin-top: 5px;
    color: ${({ theme }) => theme.textColors.textColor06};
    font-weight: 700;
    font-size: 20px;
    transition: 0.5s;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.textColors.textColor06};
    border-top: 1px solid ${({ theme }) => theme.textColors.textColor06};
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      filter: brightness(0.8);
    }
  }

  > svg {
    color: ${({ theme }) => theme.textColors.textColor06};
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 300px;
`;
export const ContainerRigth = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 3rem;
  width: 300px;
`;

export const BurguerMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  /* margin-right: 7rem; */
`;

export const IconSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  width: 48px;
  height: 48px;
  margin: 4px 15px 0 0;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};

  border-radius: 50%;

  &:hover {
    font-size: 45px;
    box-shadow: 1px 2.5px 5px black;
  }
`;

export const ThemeConteiner = styled.div`
  position: absolute;
  margin: 35% 42% 0% 0%;
  button {
    width: 35px;
    height: 18px;
  }
`;
