import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../Navbar/Navbar";
import OrderInHome from "../OrderInHome/OrderInHome";
import OurMenu from "../OurMenu/OurMenu";
import Promotions from "../Promotions/Promotions";
import Reviews from "../Reviews/Reviews";

export default function Home() {
    return (
        <div  data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
            <NavBar/>
            <Header/>
            <About/>
            <OurMenu/>
            <OrderInHome/>
            <Promotions/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </div>
    )
}