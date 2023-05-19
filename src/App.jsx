import LayoutMain from "./layout/LayoutMain";
import React, { useState, useEffect } from "react";
import Preloader from "./layout/Preloader";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Conocenos from "./pages/Conocenos";
import Noticias from "./pages/Noticias";
import Miembros from "./pages/Miembros";
import Eventos from "./pages/Eventos";
import Page_404 from "./pages/Page_404";
import RegisterMember from "./pages/RegisterMember";
import { Routes, Route, useLocation } from "react-router-dom";
const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

    useEffect(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); 

      return () => {
        clearTimeout(timer);
      };
    }, [location]);
  
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/miembros" element={<Miembros />} />
        <Route path="*" element={<Page_404 />} />
      </Route>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/registerMember" element={<RegisterMember />} />
    </Routes>
      )}
    </>
  );
  
};
export default App;
