import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/OrderHandling/Home/Home";
import PlaceOrder from "./components/OrderHandling/PlaceOrder/PlaceOrder";
import Compo from "./components/OrderHandling/Compo/Components";
import OrderList from "./components/OrderHandling/SellersOrders/OrderList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/placeorder" element={<PlaceOrder />}></Route>
      <Route path="sellerAllOrders" element={<OrderList />}></Route>
      <Route path="/components" element={<Compo />}></Route>
    </Routes>
  );
}

export default App;
