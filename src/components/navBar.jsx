import React from "react";
import Logo from "../assets/logo 3.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
const NavBar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img  className="mx-2 w-10" src={Logo} alt="logo" />
            </div>
            <div className = "m-8 flex items-center gap-4 text-2xl">
                <FaLinkedin/>
                <FaGithub/>
                <FaTwitterSquare/>
                <FaInstagramSquare/>

            </div>
        </nav>
    );
}

export default NavBar;
