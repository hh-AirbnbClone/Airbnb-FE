// const REST_API_KEY = process.env.REACT_APP_KAKAO_ID;
const REST_API_KEY = "dbe98a0c75e22d79ab3b0a4870fc39ad";
const REDIRECT_URI = "http://localhost:3000/api/auth/login";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
