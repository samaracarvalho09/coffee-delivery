import styled from "styled-components";

interface TextCoffeeProps {
  bgColor: string;
}

export const InfoCoffeeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  padding: 92px 160px;

  h1 {
    color: #272221;
    font-family: "Baloo 2";
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 62.4px;
    margin-bottom: 16px;
  }

  .container-left {
    min-width: 52%;

    .description-coffee-store {
      color: #403937;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
    }
  }

  .container-right {
    min-width: 42%;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .info-slide {
    display: flex;
    gap: 0 40px;
    justify-content: space-between;
    margin-top: 66px;
    /* flex-wrap: wrap; */
  }

  @media (max-width: 1439px) {
    padding-inline: 90px;

    h1 {
      font-size: 40px;
      line-height: 52px;
    }

    .info-slide {
      flex-wrap: wrap;
      margin-top: 52px;
    }
  }

  @media (max-width: 1080px) { 

  }
`;

export const TextCoffee = styled.div<TextCoffeeProps>`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  margin-bottom: 20px;

  .container-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9999px;
    background-color: ${(props) => props.bgColor};
  }

  p {
    color: #574f4d;
    font-family: Roboto;
    font-size: 16px;
    line-height: 20.8px;
  }
`;
