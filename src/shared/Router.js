import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Login from "../components/LoginModal";
import OAuth2RedirectHandeler from "./OAuth2RedirectHandeler";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import SearchRooms from "../components/SearchRooms";

function Router() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/rooms" element={<Home />} />
        <Route path="/rooms/:address/:checkInDate/:checkOutDate/:guestNum" element={<SearchRooms/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/auth/login" element={<OAuth2RedirectHandeler />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
