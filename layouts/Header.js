
import { IconButton } from "@elements/Common";
import Link from "next/link";
import { FacebookLogo,InstagramLogo } from "phosphor-react";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { NavLink } from "@elements/NavLink";

const Routes = {
  Home: "/home",

}

export const MainHeaderBar = ({ handleClick }) => {
  const [sideBar,setSideBar] = useState(false)
    const router = useRouter();
    useEffect(() =>{
      setSideBar(false)
    },[router])
    return (
        <div className="common_container">
      <div className="Main_content">
        <header className="header">
        <nav className="Onavbar nav_color">
          <NavLink href="/home" className="Onav-branding"
            ><img
              src="/images/Black_Car_Service%20_WHITE.png"
              className="nav_logo"
              alt="logo"
          /></NavLink>
          <ul className={`Onav-menu ${sideBar && "active"}`}>
            <NavLink href="/home" className="Onav-link">
              Home
            </NavLink>
            <NavLink href="/about-us" className="Onav-link">
              About Us
            </NavLink>
            <NavLink  href="/fleets" className="Onav-link">
              Fleets
            </NavLink>
            <NavLink href="/pricing" className="Onav-link">
              Pricing
            </NavLink>
            <NavLink href="/reviews" className="Onav-link">
              Reviews
            </NavLink>
            <NavLink href="/contact-us" className="contact_item Onav-link">
               Contact Us
            </NavLink>
            <NavLink href="/booking" className="contact_item Onav-link Booking_btn" disabledActive >
                Booking
            </NavLink>
          </ul>
          <div className={`Ohamburger ${sideBar && "active"}`} onClick={() => setSideBar(!sideBar )}>
            <span className="Obar"></span>
            <span className="Obar"></span>
            <span className="Obar"></span>
          </div>
        </nav>
      </header></div></div>
    )
}