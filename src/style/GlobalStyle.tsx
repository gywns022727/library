import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
		margin: 0;
		padding: 0;
		text-decoration: inherit;
  	box-sizing: border-box;
  }

  body {
		overflow: hidden;
		font-family : 'Noto Sans KR';
  }
`;

export default GlobalStyle;
