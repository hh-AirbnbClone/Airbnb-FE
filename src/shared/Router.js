import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Login from "../components/LoginModal";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import SearchRooms from "../components/SearchRooms";
import OAuth2RedirectHandeler from "./OAuth2RedirectHandeler";
function Router() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
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
