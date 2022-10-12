import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './components/OrderHandling/Home/Home';
import NavBar from './components/OrderHandling/Navbar/Navbar';
import Login from './components/CustomerHandling/Login';
import Signup from './components/CustomerHandling/Signup';
import UpdatePassword from './components/CustomerHandling/UpdatePassword';
import UserProfile from './components/CustomerHandling/UserProfile';
import UpdateProf from './components/CustomerHandling/UpdateProf';
import PrevOrders from './components/CustomerHandling/PrevOrders';
import Reviews from './components/OrderHandling/Reviews/Reviews';
import GiveReview from './components/OrderHandling/Reviews/GiveReview';
import PaymentDet from './components/DeliveryHandling/PaymentDet';
import PaymentInv from './components/DeliveryHandling/PaymentInv';
import CardPay from './components/DeliveryHandling/CardPay';
import AllPayments from './components/DeliveryHandling/AllPayments';
import AddCouponCode from './components/DeliveryHandling/AddCouponCode';
import AllCoupons from './components/DeliveryHandling/AllCoupons';
import PayherePage from './components/DeliveryHandling/PayherePage';

export default function App() {
  return (
    <div>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/updatepword/:id' element={<UpdatePassword />}></Route>
            <Route path='/userprof' element={<UserProfile />}></Route>
            <Route path='/updateprof/:id' element={<UpdateProf />}></Route>
            <Route path='/prevorders' element={<PrevOrders />}></Route>
            <Route path='/orderreview' element={<Reviews />}></Route>
            <Route path='/givereview' element={<GiveReview />}></Route>
            <Route path='/paymentdet' element={<PaymentDet />}></Route>
            <Route path='/paymentinv' element={<PaymentInv />}></Route>
            <Route path='/cardpay' element={<CardPay />}></Route>
            <Route path='/allpayments' element={<AllPayments />}></Route>
            <Route path='/addcouponcode' element={<AddCouponCode />}></Route>
            <Route path='/allcoupons' element={<AllCoupons />}></Route>
            <Route path='/payherepage' element={<PayherePage />}></Route>
          </Routes>
    </div>
  );
}
