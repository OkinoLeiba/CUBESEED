// import Link from "next/link";
// import Image from 'next/image'
import NavBar2 from "@/component/navbar2/navbar2"
import SearchBar from "@/component/search-bar/searchbar"
import SideNavigation from "@/component/side-navigation/SideNavigation"
import Carousel from "@/component/carousel2/carousel2"
import Main from "@cs/src/pages/home/main"
import Footer from "@/component/footer/footer"








const HomePage = () =>{



    return (
        <> 
            <NavBar2 />
            <SearchBar />
            <SideNavigation />
            <Carousel />
            <Main />
                       
            
        </>
    );
};



export default HomePage;

    