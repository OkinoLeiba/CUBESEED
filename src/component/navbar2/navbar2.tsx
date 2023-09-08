// anticipate will be needed for log in and icons & logo linking/redirect to other pages
import Link from "next/link"
import Image from "next/image"
//import LoginPage from "@/pages/login_page/login-page" //confirm that there is nothing I need in here then delete
// import {NavLink} from "react-router-dom" // TODO: may, will need to add to  list of dependencies 
import CubeSeed from "@cs/public/cubeseed.png"
import ShoppingBag from "@cs/src/assets/icons/home-vuesax-linear-shopping-bag.svg"
import HomeLogin from "@cs/src/assets/icons/home-log-in-profile-circle.svg"
import styles from "@/styles/navbar2.module.scss"


// don't forget ARIA***
// should image files be in public
// variable declaration of css global properties 
// React.root to render root for main app or entry point to the website
// TODO: research naming convention for class names 08/14/2023


const NavBar2 = () => {
  return (
    // const [isClick, setClick] = useState("false");
    // const [isOpen, setOpen] = useState("false");
    // const [showMenu, setShowMenu] = useState("false");

    // const showMenu = () => {setShowMenu(!showMenu)}

    <nav className="{styles.nav}" role="navigation" aria-label="main navigation">
      <div className={styles.nav_container}> 
              {/* <div className="flex justify-content align-middle align-self" >  */}
              <div className={styles.image_container}>
                  {/* should I wrap link around the image? */}
                  {/* data/string/variable interpolation for className and properties, normal and best practice - change */}
                  {/* navLink?? */}
                  <Link href="/"><Image className="cubeseed-logo" src={CubeSeed} width={140} height={30} alt="cubeseed logo"/></Link>
              </div>    
              <div className={styles.profile_container}>
                <Link href="/"><Image className="shoppingbag-icon" src={ShoppingBag} width={30} height={30} alt="shopping bag icon"/></Link>
                <Link href="/"><Image  className="homelogin-icon" src={HomeLogin} width={30} height={30} alt="profile circle icon"/></Link>  
                <Link className={styles.profile_login_text} href="/"><p>Login/Sign Up</p></Link>
              {/* <Image className="hamburger-helper" src="" alt="menu" onClick={"showMenu"} /> */}
              </div>
      </div>
    </nav>


// <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
//   <div className="nav-container" > 
//           {/* <div className="flex justify-content align-middle align-self" >  */}
//           <div className="image-container">
//               {/* should I wrap navlink around the image? */}
//               {/* data/string/variable interpolation for className, normal and best practice - change */}
//               <Image className="cubeseed-logo"  activeclassName="is-active" src={CubeSeed} width={160} height={30} alt="cubeseed logo" />
//           </div>    
//           <div className="profile-container" >
//               <Image className="shoppingbag-icon" src={ShoppingBag} width={30} height={30} alt="shopping bag" />
//               <Image  className="homelogin-icon"src={HomeLogin} width={30} height={30} alt="home log in profile circle" />
          
//           <p className="profile-login-text">Login/Sign Up</p>
//           </div>
//   </div>
// </nav>


    // TODO: add section of code for responsive site: at break point hamburger menu and dropdown menu 
    // Note: TailwindCSS is mobile first
    // <p>Hello, World</p>
  );
};

export default NavBar2;




  // different approach to nav link will need to change <li> and <ul> but may be needed for other nav formats, can also use <a href><a/>...set or follow convention of other programmers
  // may be needed for routering with side navbar
    // <nav className={nav}>
      
    //   <div className={navlinkgroup}>
    //     <ul className={navlinks}>
    //       <li className={navlink}>
    //         <Link href='/'>
              
    //         </Link>
    //       </li>
    //       <li className={navlink}>
    //         <Link href='/'>
              
    //         </Link>
    //       </li>
    //       <li className={navlink}>
    //         <Link href='/'>
              
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className={navbuttongroup}>
    //     <Link href="/login_page/login-page" legacyBehavior className={loginbutton}>
    //       <a className={button}>Login/Sign Up</a>
    //     </Link>
    //   </div>
    // </nav>

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// return (
//   <Router>
//     <Navbar />
//     <Routes>
//       <Route path='/' exact component={Home} />
//       <Route path='/' component={} />
//       <Route path='/' component={} />
//       <Route path='/' component={} />
//       <Route path='/' component={} />
//       <Route path='/' component={} />
//       <Route path='/' component={} />
//     </Routes>
//   </Router>
// );
