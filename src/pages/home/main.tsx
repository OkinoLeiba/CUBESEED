import Image from "next/image"
import Home_Keyboard_Arrow_Left from "@cs/src/assets/icons/home-keyboard-arrow-left.svg"
import Home_Keyboard_Arrow_Right from "@cs/src/assets/icons/home-keyboard-arrow-right.svg"
import Home_Main_Image from "@cs/src/assets/home-main-image.png"
import "./main.css"
import "@cs/src/styles/globals.css"


const Main = () => {
    
    return (
        <main className="main_home">
            <div className="main_container">
                <Image className="arrow_left_icon" src={Home_Keyboard_Arrow_Left} width={28} height={28} alt="keyboard arrow left" />
                <Image className="home_main_image" src={Home_Main_Image} width={486} height={339} alt="main center image" />
                <div className="home_textgroup">
                    <p className="home_main_ss">SUPER SALE</p>
                    <p className="home_main_discount"> UP TO 40% OFF</p>
                    <p className="home_main_shopnow">SHOP NOW</p>
                </div>
                <Image className="arrow_right_icon" src={Home_Keyboard_Arrow_Right} width={28} height={28} alt="keyboard arrow right" />

            </div>
        </main>
    );
};

export default Main;