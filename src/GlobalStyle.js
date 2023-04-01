import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
html {
    font-family: "Spoqa Han Sans Neo";
    overflow-x: hidden;
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
.basicBox{
  padding: 5%;
  overflow: hidden;
  box-sizing: border-box;
 border :1px solid black ;
}
.basicBox{
  padding: 5%;
  overflow: hidden;
  box-sizing: border-box;
 border :1px solid black ;

}
button{
  cursor: pointer;
}
.MainColor{
  color: #ff385c;
  fill: #ff385c;
}
.leteLine{
  border-right: 1px solid #ddd;
}
.mainBoxWrap{
  width: 100%;
}
.mainBox{
  position: relative;
  width: 100%;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  img{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
}
/* slider */
.mainBox::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.arrow{
  position: absolute; z-index: 3;
}

.left{right: -50% !important;}
.right{left: -50% !important;}
.slick-prev{left: -10% !important;z-index: 3;opacity: 0.3; padding: 20% 15%;}
.slick-next{right:-10% !important;opacity: 0.3;padding: 20% 15%;}
.slick-prev:hover{opacity: 1; transition: all 0.3s}
.slick-next:hover{opacity: 1; transition: all 0.3s}

.slick-dots{position: absolute; z-index: 3; bottom: 6%; color:white;font-size:5px}
.slick-dots li.slick-active button:before{color: white;}
.slick-dots li button:before{color: white; width:5px; height:5px;font-size:5px}
.slick-dots li{width: 5px;height:5px}
.heartWrap{
  position: absolute;
  top: 7%;
  right: 3%;
  z-index: 4;
  overflow:hidden;
  box-sizing: border-box;
}
/* .heartWrap input{
  display :none;
} */
.heartWrap{
  cursor: pointer;
    width: 16px;
    height: 16px;
    z-index: 4;
    color: white;
    display: flex;
    justify-content: center;
}
.tiheart{
  z-index: 2;
  opacity: 0.9!important;
  fill:rgba(0,0,0,0.5);
  color:rgba(0,0,0,0.5)
}
.tiheart:hover{
  color: #ff385c;
  fill: #ff385c;
  transition: all 0.5;
}
.heart{
  position: absolute;
  top: 3%;
  right: 3%;
}
img{
  object-fit:cover
}
.button{
  background-color: #ff385c!important;
  font-weight: 900;
  color : white;
  width: 100%;
  padding: auto 10%
}
button{
  margin: 2%;
  background-color: #ff385c;
  font-weight: 900;
  color : white;
  border-radius: 30px;
  border: none;
  padding: auto 10%
}
.magin-left{
  margin-left: 17%;
}
.gray{
  color: rgb(112, 112, 112);
}
.bolderGray{
  font-weight: 900;
  color: gray
}
.colorKakao{
  width: 80px;
  height: 40px;
  font-weight: 900;
  color : white;
  background-color: #f7E600;
  color:#333;
  padding: auto 10%
  
}
select {
  width: 47%;
  padding: .8em .5em; /* 여백으로 높이 설정 */
  font-family: inherit;  /* 폰트 상속 */
  background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 95% 50%; /* 네이티브 화살표 대체 */  
  border: 1px solid #ddd; 
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  border-radius: 20px;
  padding-left: 3%;

}
.Homecalendar{
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
}
.selectWrap{
  display:flex;
  margin-bottom: 20px;
  width: 618px;
  justify-content: space-between;
}
`

export default GlobalStyle;
