import React from "react";
//components
import Navbar from "../components/Navbar/navbar.components";
import HeroCarousal from "../components/HeroCarousal/Herocarousal.component";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousal />
            {props.children}
        </>
    );
};

export default DefaultLayout;