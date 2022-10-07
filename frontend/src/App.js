import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/OrderHandling/Home/Home";
import AddNewDesign from "./components/ShopHandling/AddNewDesign/AddNewDesign";
import DisplayDesigns from "./components/ShopHandling/DisplayDesign/DisplayDisgn";
import Updatedesign from "./components/ShopHandling/UpdateDesign/UpdateDesign";
import Compo from "./components/Components";
import Acceptedorders from "./components/ShopHandling/PlacedOrders/Placedorders";
import Addshopowners from "./components/ShopHandling/Addshopowners/Addshopowners";
import Footer from "./components/OrderHandling/Footer/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/addesign" element={<AddNewDesign />}></Route>
      <Route path="/displaydesign"  element={<DisplayDesigns/>}></Route>
      <Route path="/update/:id"  element={<Updatedesign/>}></Route>
      <Route path="/compo"  element={<Compo/>}></Route>
      <Route path="/Acorders"  element={<Acceptedorders/>}></Route>
      <Route path="/addowner"  element={<Addshopowners/>}></Route>
    </Routes>
  );
}

export default App;
