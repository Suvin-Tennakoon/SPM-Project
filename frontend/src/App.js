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

let isAccType = localStorage.getItem('AccountType');

export default function App() {
  return (
    <div>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/updatepword/:id' element={<UpdatePassword />}></Route>
            <Route path='/userprof' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <UserProfile /> : <Login />}></Route>
            <Route path='/updateprof/:id' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <UpdateProf /> : <Login />}></Route>
            <Route path='/prevorders' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <PrevOrders /> : <Login />}></Route>
            <Route path='/orderreview' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <Reviews /> : <Login />}></Route>
            <Route path='/givereview' element={isAccType === "Admin"||isAccType === "Shop Owner"||isAccType === "Customer" ? <GiveReview /> : <Login />}></Route>
          </Routes>
    </div>
  );
}

