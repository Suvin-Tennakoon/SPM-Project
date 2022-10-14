import { Route } from "react-router-dom";
import PaymentDet from "../components/DeliveryHandling/PaymentDet";
import PaymentInv from "../components/DeliveryHandling/PaymentInv";
import CardPay from "../components/DeliveryHandling/CardPay";
import AllPayments from "../components/DeliveryHandling/AllPayments";
import AddCouponCode from "../components/DeliveryHandling/AddCouponCode";
import AllCoupons from "../components/DeliveryHandling/AllCoupons";
import PayherePage from "../components/DeliveryHandling/PayherePage";
import Rating from '../components/DeliveryHandling/Rating';

export default function VISHARA_ROUTES() {
  return (
    <>
      <Route path="/paymentdet" element={<PaymentDet />}></Route>
      <Route path="/paymentinv" element={<PaymentInv />}></Route>
      <Route path="/cardpay" element={<CardPay />}></Route>
      <Route path="/allpayments" element={<AllPayments />}></Route>
      <Route path="/addcouponcode" element={<AddCouponCode />}></Route>
      <Route path="/allcoupons" element={<AllCoupons />}></Route>
      <Route path="/payherepage" element={<PayherePage />}></Route>
      <Route path="/rating" element={<Rating />}></Route>
    </>
  );
}


