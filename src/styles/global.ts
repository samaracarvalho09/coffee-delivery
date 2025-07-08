import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;

}


 body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  /* Remove as setas dentro do input number: Chrome, Safari, Edge, Opera */
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Remove as setas dentro do input number: Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input {
  border: none;
  outline: none;
  
  color: #574F4D;
  background-color: transparent;

  /* padding: 12px; */
}


`;
