/*global Kakao*/ 
const REST_API_KEY = "658cf70d3e0e9690b7343f3d1f06ff3a";
const REDIRECT_URI = "http://3.34.181.44/auth/login";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=658cf70d3e0e9690b7343f3d1f06ff3a&redirect_uri=http://localhost:3000/auth/login&response_type=code`;

const KakaoInit = () => {
  Kakao.init('159de280691fa197a58e88677018194b');
}; //Kakao.init 의 파라미터로 자바스크립트 키를 넣어줍니다. ✨

export const Login = () => {
 
  
}

