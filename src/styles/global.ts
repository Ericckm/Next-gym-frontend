import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  input[type=number] {
  -moz-appearance: textfield;
}
}

body {
  background: linear-gradient(#5C6984, #B7BECD);
  color: ${(props) => props.theme.colors.primary};
  font: 400 16px Roboto, sans-serif;
  height: 100vh;
}
`
