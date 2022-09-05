import styled from "styled-components";

export const Header = styled.header`
  width: 100%;

  > section {
    display: none;
  }

  @media screen and (min-width: 768px) {
    > div {
      display: none;
    }
    > section {
      display: flex;
    }

    height: 16rem;
  }
`;
