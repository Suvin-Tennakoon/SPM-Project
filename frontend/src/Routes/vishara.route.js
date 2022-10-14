import { Route } from "react-router-dom";
import PaymentDet from "../components/DeliveryHandling/PaymentDet";
import PaymentInv from "../components/DeliveryHandling/PaymentInv";
import CardPay from "../components/DeliveryHandling/CardPay";
import AllPayments from "../components/DeliveryHandling/AllPayments";
import AddCouponCode from "../components/DeliveryHandling/AddCouponCode";
import AllCoupons from "../components/DeliveryHandling/AllCoupons";
import PayherePage from "../components/DeliveryHandling/PayherePage";
import ViewCoupons from "../components/DeliveryHandling/ViewCoupons";
import Rate from "../components/DeliveryHandling/Rate";

export default function VISHARA_ROUTES() {
  return (
    <>
      <Route path="/paymentdet/:id" element={<PaymentDet />}></Route>
      <Route path="/paymentinv/:id/:code" element={<PaymentInv />}></Route>
      <Route path="/cardpay" element={<CardPay />}></Route>
      <Route path="/allpayments" element={<AllPayments />}></Route>
      <Route path="/addcouponcode" element={<AddCouponCode />}></Route>
      <Route path="/allcoupons" element={<AllCoupons />}></Route>
      <Route path="/payherepage" element={<PayherePage />}></Route>
      <Route path="/viewcoupons" element={<ViewCoupons />}></Route>
      <Route path="/rating" element={<Rate />}></Route>
    </>
  );
}
