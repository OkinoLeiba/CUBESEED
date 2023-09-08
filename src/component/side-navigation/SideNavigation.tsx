// This is the file creating the side navigation bar component
// It shows the icon version of each functionality

import "./SideNavigation.css"
import logoicon from "@cs/src/assets/icons/home-logo-icon.png"
import homeicon from "@cs/src/assets/icons/home-icon.svg"
import listicon from "@cs/src/assets/icons/home-hamburger-icon.svg"
import paymenticon from "@cs/src/assets/icons/home-payments-icon.svg"
import staricon from "@cs/src/assets/icons/home-star-icon.svg"
import homeuser from "@cs/src/assets/icons/home-user-icon.svg"
import settingsicon from "@cs/src/assets/icons/home-settings-icon.svg"
// import {NavLink} from "react-router-dom" // TODO: may, will need to add to list of dependencies 


import Image from "next/image"
import Link from 'next/link';


const SideNavigation = () => {

  return (
    <div className="side-navbar-container">
          <Image className="logo-icon" src={logoicon} width={56} height={56}  alt="cubeseed logo no text" />
          
          <p className="line-break"></p>
          <div className="icon-container">
          <Link href="/"><Image className="home-icon" src={homeicon} width={24} height={24}  alt="go to home page" /></Link>
          <Link href="/"><Image className="list-icon" src={listicon} width={24} height={24}  alt="go to list page" /></Link>
        
          <Link href="/"><Image className="payment-icon" src={paymenticon} width={24} height={24}  alt="go to payment page" /></Link>
        
          <Link href="/"><Image className="star-icon" src={staricon} width={20} height={20}  alt="go to starred page" /></Link>
          <Link href="/"><Image className="home-user" src={homeuser} width={24} height={24}  alt="go to home user page" /></Link>

          <Link href="/"><Image className="setting-icon" src={settingsicon} width={22} height={22}  alt="go to settings page" /></Link>
          </div>
          
    </div>
  )
}

export default SideNavigation;
