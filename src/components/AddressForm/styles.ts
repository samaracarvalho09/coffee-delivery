import styled from "styled-components";

export const AddressFormContainer = styled.div`
  max-width: 640px;
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border-radius: 6px;
  background: #f3f2f2;

  .wrapper-title-container {
    display: flex;
    gap: 8px;

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
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 18.2px;
        color: #574f4d;
      }
    }
  }

  form {
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 16px;
    width: 100%;
  }

  .input-container {
    display: flex;
    /* width: 100%; */
    padding: 12px;
    align-items: center;
    gap: 4px;

    border-radius: 4px;
    border: 1px solid #e6e5e5;
    background: #ededed;
  }

  input {
    color: #8d8686;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .optional-info span {
    color: #8d8686;
    font-family: Roboto;
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
    line-height: 15.6px;
  }

  .cep-info {
    max-width: 200px;
  }

  .street-info {
    width: 100%;
  }

  .number-info {
    max-width: 200px;
  }

  .optional-info {
    /* max-width: 348px; */
    flex: 1;
    justify-content: space-between;
  }
  .number-info {
    max-width: 200px;
  }

  .neighborhood-info {
    max-width: 200px;
  }

  .city-info {
    flex: 1;
  }

  .uf-info {
    max-width: 60px;
  }
`;

export const FormContainer = styled.form``;
