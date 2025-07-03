import styled from "styled-components";

export const CartContainer = styled.div`
  position: relative;
  padding-top: 100px;

  max-width: 256px;
  width: 256px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px 36px;
  background: #f3f2f2;

  /* img {
    width: 120px;
    position: relative;
    top: -20px;
  } */
  .product-image {
    position: absolute;
    top: -20px;
    width: 120px;
  }

  .type-product {
    width: max-content;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 13px;

    text-transform: uppercase;
    color: #c47f17;
    border-radius: 100px;
    background: #f1e9c9;
    padding: 4px 8px;
    margin-block: 12px 16px;
  }

  .title-product {
    color: #403937;
    text-align: center;

    font-family: "Baloo 2";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }

  .description-product {
    width: 216px;
    height: 36px;
    color: var(--Base-Label, #8d8686);
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18.2px;
    margin-block: 8px 32px;
  }

  .add-product-container {
    display: flex;
    .price-product {
    }

    .simbol-price {
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18.2px;
      color: #574f4d;
    }

    .price {
      font-family: "Baloo 2";
      font-size: 24px;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
      color: #574f4d;
    }

    .quantity-container {
      margin-inline: 24px 8px;
      display: flex;
      height: 38px;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 4px;

      border-radius: 6px;
      background: #e6e5e5;
    }

    .quantity-product {
      width: 20px;
      text-align: center;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20.8px;
      color: #272221;
    }

    button {
      display: flex;
      border: none;
      outline: none;
      background-color: transparent;

      cursor: pointer;
    }

    .add-cart {
      display: flex;
      padding: 8px;
      justify-content: center;
      align-items: center;
      gap: 8px;

      border-radius: 6px;
      background: #4b2995;

      cursor: pointer;
    }
  }
`;
