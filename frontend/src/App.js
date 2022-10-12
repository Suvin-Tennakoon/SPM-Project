import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/OrderHandling/Home/Home";
import NavBar from "./components/OrderHandling/Navbar/Navbar";
import Login from "./components/CustomerHandling/Login";
import Signup from "./components/CustomerHandling/Signup";
import UpdatePassword from "./components/CustomerHandling/UpdatePassword";
import UserProfile from "./components/CustomerHandling/UserProfile";
import UpdateProf from "./components/CustomerHandling/UpdateProf";
import PrevOrders from "./components/CustomerHandling/PrevOrders";
import Reviews from "./components/OrderHandling/Reviews/Reviews";
import PlaceOrder from "./components/OrderHandling/PlaceOrder/PlaceOrder";
import Compo from "./components/OrderHandling/Compo/Components";
import OrderList from "./components/OrderHandling/SellersOrders/OrderList";
import CakeOrderShp from "./components/OrderHandling/CakeOrderShop/CakeOrderShp";
import OrderProgress from "./components/OrderHandling/OrderProgress/OrderProgress";
import PaymentDet from './components/DeliveryHandling/PaymentDet';
import PaymentInv from './components/DeliveryHandling/PaymentInv';
import CardPay from './components/DeliveryHandling/CardPay';
import AllPayments from './components/DeliveryHandling/AllPayments';
import AddCouponCode from './components/DeliveryHandling/AddCouponCode';
import AllCoupons from './components/DeliveryHandling/AllCoupons';
import UpdateOrder from "./components/OrderHandling/UpdateOrder/UpdateOrder";
import Unauthorized from "./components/OrderHandling/Unauthorized/Unauthorized";
import PdfGen from "./components/OrderHandling/PDFgen/PdfGen";
import PayherePage from './components/DeliveryHandling/PayherePage';
import AllCustomers from './components/AdminHandling/AllCustomers';
import AllReviews from './components/AdminHandling/AllReviews';
import AdminHome from './components/AdminHandling/Home'; 
import GiveReview from './components/OrderHandling/GiveReview';


let isAccType = localStorage.getItem('AccountType');

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/updatepword/:id" element={<UpdatePassword />}></Route>

        <Route path='/userprof' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <UserProfile /> : <Login />}></Route>
        <Route path='/updateprof/:id' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <UpdateProf /> : <Login />}></Route>
        <Route path='/prevorders' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <PrevOrders /> : <Login />}></Route>
        <Route path='/orderreview' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <Reviews /> : <Login />}></Route>
        <Route path='/givereview/:id' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <GiveReview /> : <Login />}></Route>
       

        <Route path="/givereview" element={<GiveReview />}></Route>
        <Route path="/paymentdet" element={<PaymentDet />}></Route>
        <Route path="/paymentinv" element={<PaymentInv />}></Route>
        <Route path="/cardpay" element={<CardPay />}></Route>
        <Route path="/allpayments" element={<AllPayments />}></Route>
        <Route path="/addcouponcode" element={<AddCouponCode />}></Route>
        <Route path="/allcoupons" element={<AllCoupons />}></Route>
        <Route path='/payherepage' element={<PayherePage />}></Route>

        <Route path='/allcus' element={<AllCustomers />}></Route>
        <Route path='/allrev' element={<AllReviews />}></Route>
        <Route path='/adminhome' element={<AdminHome />}></Route>

        <Route path="/placeorder" element={<PlaceOrder />}></Route>
        <Route path="/sellerAllOrders" element={<OrderList />}></Route>
        <Route path="/components" element={<Compo />}></Route>
        <Route path="/orderRequest/:id" element={<CakeOrderShp />}></Route>
        <Route path="/orderProgress/:id" element={<OrderProgress />}></Route>
        <Route path="/orderUpdate/:id" element={<UpdateOrder />}></Route>
        <Route path="/unauthorized" element={<Unauthorized />}></Route>
           
      </Routes>
    </div>
  );
}

