import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/Login";
import OAuth2RedirectHandeler from "./OAuth2RedirectHandeler";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/oauth/callback/kakao"
          element={<OAuth2RedirectHandeler />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
