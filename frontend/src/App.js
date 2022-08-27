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
          </Routes>
    </div>
  );
}
