import React, {useState, useEffect} from "react"
import Link from "next/link"
import HOME_ICON_SOLID_ARROW_RIGHT from "@cs/src/assets/icons/home-icon-solid-arrow-right.svg"
import HOME_SOCIAL_COLOR_FACEBOOK from "@cs/src/assets/home-social-color-facebook.png"
import HOME_SOCIAL_COLOR_TWITTER from "@cs/src/assets/home-social-color-twitter.png"
import HOME_SOCIAL_COLOR_INSTAGRAM from "@cs/src/assets/home-social-color-instagram.png"
import HOME_PAYMENT_VISA_SOLID from "@cs/src/assets/home-payment-visa-solid.png"
import HOME_PAYMENT_MASTERCARD from "@cs/src/assets/home-payment-mastercard-card.png"
import HOME_PAYMENT_PAYPAL from "@cs/src/assets/home-payment-paypal-card.png"



const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer-context">
                <table className="footer-context-table">
                    <tr>
                        <th><Link href="/">Help</Link></th>
                        <th><Link href="/">CUBESEED</Link></th>
                    </tr>
                    <tr>
                        <td><Link href="/">Track Orders</Link></td>
                        <td><Link href="/">About Us</Link></td>
                    </tr>
                    <tr>
                        <td><Link href="/">Shipping</Link></td>
                        <td><Link href="/">Cites We Serve</Link></td>
                    </tr>
                    <tr>
                        <td><Link href="/">Cancellation</Link></td>
                        <td><Link href="/">Registration Office</Link></td>
                    </tr>
                    <tr>
                        <td><Link href="/">FAQs</Link></td>
                        <td>Address:</td> {/*this will require special styling */}
                    </tr>
                    <tr>
                        <td><Link href="/">Contact Us</Link></td>
                    </tr>
                </table>
                <div className="subscribe_social-container">
                    <div className="subscribe-container">
                    <Link href="/">Subscribe to be the first to know about our special offers</Link>
                    <input type="email" id="subscribe-email" name="subscribe-email" placeholder="Email Address" />
                    <input type="image" id="subscribe-email-icon" name="subscribe-email-icon" alt="email submit button" src={HOME_ICON_SOLID_ARROW_RIGHT} width={20} height={20}/>
                    </div>

                    <div className="socials-container">
                    <Link href={}><Image src={HOME_SOCIAL_COLOR_FACEBOOK} width={24} height={24} /></Link> 
                    <Link href={}><Image src={HOME_SOCIAL_COLOR_TWITTER} width={24} height={24} /></Link>
                    <Link href={}><Image src={HOME_SOCIAL_COLOR_INSTAGRAM} width={24} height={24} /></Link>
                    </div>   

                    <div className="card-payment-container">
                    <a href={}><Image  src={HOME_PAYMENT_VISA_SOLID} width={20} height={20} /></a> 
                    <a href={}><Image  src={HOME_PAYMENT_MASTERCARD} width={20} height={20} /></a>
                    <a href={}><Image  src={HOME_PAYMENT_PAYPAL} width={20} height={20} /></a>  
                    </div> 

                    <div className="copyright_privacy-container">
                        <p>&copy; 2023 CUBESEED. ALL RIGHTS RESERVED.</p>
                        <span><Link href="/">Privacy Policy</Link><Link href="/">Terms & Conditions</Link><Link href="/">Accessibility</Link></span>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Footer