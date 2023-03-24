import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
html {
    font-family: "Spoqa Han Sans Neo";

  width: 100vw;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  src: url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");
  font-style: normal;
}

body{
  margin: 0;
} 
a {
  text-decoration: none;
  
}
svg{
  width: auto;
  height: auto;
}

:root {
  --font-size-md: 1.5rem;
  --font-size-base: 1.125rem;
  --color-white: white; 
  --color-mainColor: color: #ff385c;
}

`;

export default GlobalStyle;
