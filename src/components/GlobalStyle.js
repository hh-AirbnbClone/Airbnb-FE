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
`;

export default GlobalStyle;
