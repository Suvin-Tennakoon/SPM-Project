import "./App.css";
import { Routes } from "react-router-dom";
import NavBar from "./components/OrderHandling/Navbar/Navbar";
import SUVIN_ROUTES from "./Routes/suvins.route";
import CHAMODI_ROUTES from "./Routes/chamodi.route";
import VISHARA_ROUTES from "./Routes/vishara.route";
import DINIRU_ROUTES from "./Routes/diniru.route";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {SUVIN_ROUTES()}
        {CHAMODI_ROUTES()}
        {VISHARA_ROUTES()}
        {DINIRU_ROUTES()}
      </Routes>
    </div>
  );
}

