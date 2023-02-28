import LayoutMain from "./layout/LayoutMain";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};
export default App;
