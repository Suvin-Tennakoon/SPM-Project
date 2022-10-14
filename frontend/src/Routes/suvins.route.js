import { Route } from "react-router-dom";
import Home from "../components/OrderHandling/Home/Home";
import PlaceOrder from "../components/OrderHandling/PlaceOrder/PlaceOrder";
import Compo from "../components/OrderHandling/Compo/Components";
import OrderList from "../components/OrderHandling/SellersOrders/OrderList";
import CakeOrderShp from "../components/OrderHandling/CakeOrderShop/CakeOrderShp";
import OrderProgress from "../components/OrderHandling/OrderProgress/OrderProgress";
import UpdateOrder from "../components/OrderHandling/UpdateOrder/UpdateOrder";
import Unauthorized from "../components/OrderHandling/Unauthorized/Unauthorized";

export default function SUVIN_ROUTES() {
  return (
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/placeorder/:seller" element={<PlaceOrder />}></Route>
      <Route path="/sellerAllOrders" element={<OrderList />}></Route>
      <Route path="/components" element={<Compo />}></Route>
      <Route path="/orderRequest/:id" element={<CakeOrderShp />}></Route>
      <Route path="/orderProgress/:id" element={<OrderProgress />}></Route>
      <Route path="/orderUpdate/:id" element={<UpdateOrder />}></Route>
      <Route path="/unauthorized" element={<Unauthorized />}></Route>
    </>
  );
}
