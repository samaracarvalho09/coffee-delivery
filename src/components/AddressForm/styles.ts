import styled from "styled-components";

export const AddressFormContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border-radius: 6px;
  background: #f3f2f2;
  /* background: rgb(198, 154, 154); */

  .wrapper-title-container {
    display: flex;
    gap: 8px;
}
  }

  .container-title {
    display: flex;
    flex-direction: column;
    gap: 2px;
  

    .title {
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20.8px;
      color: #403937;
    }
    .description {
      /* Text/Regular S */
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18.2px;
      color: #574f4d;
    }
  }
`;
