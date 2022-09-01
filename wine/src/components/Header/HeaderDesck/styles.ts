import styled from "styled-components";
import { string } from "yup";

import BagUrl from "../../../assets/bag.png";

export const HeaderDeskContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};
  padding: 10px 20px;

  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  > a {
    margin-top: 7px;
    color: ${({ theme }) => theme.textColors.textColor06};
    font-family: "Neo Sans Std", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    transition: 0.5s;
    width: 64px;
    height: 24px;

    padding-bottom: 2rem;

    &:hover {
      color: ${({ theme }) => theme.textColors.textSelect};
      border-bottom: 1px solid ${({ theme }) => theme.textColors.textSelect};
      cursor: pointer;
      transform: scale(1.1);
      filter: brightness(0.8);
    }
  }
`;

export const CircleIcons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.3rem;
  color: ${({ theme }) => theme.textColors.textColor06};
  border: 2px solid ${({ theme }) => theme.textColors.textColor07};
  border-radius: 50%;

  background-color: ${({ theme }) =>
    theme.backgroundColors.secondaryBackground};

  width: 48px;
  height: 48px;
`;

export const CardCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #f6b554;
  background-color: #f6b554;
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

export const Bag = styled.div`
  background-image: url(${BagUrl.src});
  background-repeat: no-repeat;
  background-position: center;
  width: 48px;
  height: 48px;
  border-radius: 0 0 50% 50%;
`;
