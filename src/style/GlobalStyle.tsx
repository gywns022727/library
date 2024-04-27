import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
		margin: 0;
		padding: 0;
		text-decoration: inherit;
  	box-sizing: border-box;
		font-family : 'Noto Sans KR'
  }

  body {
  }
`;

export default GlobalStyle;
