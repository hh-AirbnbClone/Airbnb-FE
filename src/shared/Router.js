import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/LoginModal";
import OAuth2RedirectHandeler from "./OAuth2RedirectHandeler";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/auth/login" element={<OAuth2RedirectHandeler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
