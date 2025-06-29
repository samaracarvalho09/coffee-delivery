import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  padding: 32px 160px;

  .container-icons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .info-location {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 6px;
    background: #ebe5f9;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    color: #4b2995;
  }

  .info-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 8px;

    border-radius: 6px;
    background: #f1e9c9;

    cursor: pointer;
    transition: 0.2s;

    position: relative;
  }

  .info-cart:hover {
    background: #f9f5d7;
  }

  .quantity-products {
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;

    background: #c47f17;
    border-radius: 9999px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;

    position: absolute;
    right: -8px;
    top: -8px;
  }
`;
