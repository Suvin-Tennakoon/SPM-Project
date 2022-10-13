import { Route } from "react-router-dom";
import Login from "../components/CustomerHandling/Login";
import Signup from "../components/CustomerHandling/Signup";
import UpdatePassword from "../components/CustomerHandling/UpdatePassword";
import UserProfile from "../components/CustomerHandling/UserProfile";
import UpdateProf from "../components/CustomerHandling/UpdateProf";
import PrevOrders from "../components/CustomerHandling/PrevOrders";
import AllCustomers from "../components/AdminHandling/AllCustomers";
import AllReviews from "../components/AdminHandling/AllReviews";
import AdminHome from "../components/AdminHandling/Home";
import GiveReview from "../components/OrderHandling/GiveReview";
import Reviews from "../components/OrderHandling/Reviews/Reviews";

export default function DINIRU_ROUTES() {
  let isAccType = localStorage.getItem("AccountType");

  return (
    <>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/updatepword/:id" element={<UpdatePassword />}></Route>
      <Route path="/allcus" element={<AllCustomers />}></Route>
      <Route path="/allrev" element={<AllReviews />}></Route>
      <Route path="/adminhome" element={<AdminHome />}></Route>
      <Route
        path="/userprof"
        element={
          isAccType === "Admin" ||
          isAccType === "Shop Owner" ||
          isAccType === "Customer" ? (
            <UserProfile />
          ) : (
            <Login />
          )
        }
      ></Route>
      <Route
        path="/updateprof/:id"
        element={
          isAccType === "Admin" ||
          isAccType === "Shop Owner" ||
          isAccType === "Customer" ? (
            <UpdateProf />
          ) : (
            <Login />
          )
        }
      ></Route>
      <Route
        path="/prevorders"
        element={
          isAccType === "Admin" ||
          isAccType === "Shop Owner" ||
          isAccType === "Customer" ? (
            <PrevOrders />
          ) : (
            <Login />
          )
        }
      ></Route>
      <Route
        path="/orderreview"
        element={
          isAccType === "Admin" ||
          isAccType === "Shop Owner" ||
          isAccType === "Customer" ? (
            <Reviews />
          ) : (
            <Login />
          )
        }
      ></Route>
      <Route
        path="/givereview/:id"
        element={
          isAccType === "Admin" ||
          isAccType === "Shop Owner" ||
          isAccType === "Customer" ? (
            <GiveReview />
          ) : (
            <Login />
          )
        }
      ></Route>
    </>
  );
}
