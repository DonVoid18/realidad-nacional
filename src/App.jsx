import LayoutMain from "./layout/LayoutMain";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Regiter from "./pages/Register"
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Home />}></Route>
      </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Regiter/>}></Route>
    </Routes>
  );
};
export default App;
