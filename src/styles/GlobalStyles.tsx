import { createGlobalStyle } from "styled-components";
import { colorTheme } from "./vars/ThemeVars";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after
{
margin:0;
padding:0;
box-sizing: border-box;
}

body
{
background-color: ${colorTheme.colors.grey.dark};
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
}
`;
