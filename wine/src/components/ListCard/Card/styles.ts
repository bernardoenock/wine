import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 256px;
  height: 387px;
  margin: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 333px;

  background: #ffffff;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);

  margin-bottom: 1rem;
`;

interface Props {
  imgUrl: string;
}

export const ImgProduct = styled.div<Props>`
  background-image: url(${(p) => p.imgUrl});
  background-color: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;
  width: 198.57px;
  height: 178.13px;
`;

export const ContainerInfo = styled.div`
  margin: 1rem;
  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.222488px;

    color: #1d1d1b;
  }
`;

export const PriceDiscont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 25% 0 25%;
`;

export const Price = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  /* identical to box height, or 142% */

  text-align: center;
  text-decoration-line: line-through;

  color: #888888;
`;

export const Discount = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;

  background: #f79552;
  border-radius: 1.94677px;

  color: #ffffff;
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin: 3% 22% 0 22%;

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 10px;
    text-transform: uppercase;

    color: #1d1d1b;
  }
  span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 27px;

    color: #b6116e;
  }
`;

export const NonMember = styled.span`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  color: #888888;
`;
