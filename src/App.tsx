import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { Home } from "./routes/home";
import "./index.css";
import { Tienda } from "./routes/tienda";
import { Servicios } from "./routes/servicios";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/tienda" element={<Tienda></Tienda>}></Route>
        <Route path="/servicios" element={<Servicios></Servicios>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
