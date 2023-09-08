import { ReactNode } from "react"
import { useCarousel } from "use-carousel-hook"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// might be a good idea module not fully supported, consider alternatives
// import carouselItems from '@cs/src/pages/home/home'
import Image from "next/image"
import "./carousel2.css"
import styles from "@styles/carousel2.module.css"
import CarouselImage1 from "@cs/src/assets/carousel/home-unsplash-carousel1.png"
import CarouselImage2 from "@cs/src/assets/carousel/home-unsplash-carousel2.png"
import CarouselImage3 from "@cs/src/assets/carousel/home-unsplash-carousel3.png"

const carouselItems = [
    {image:CarouselImage1, text:"Fruits"},
    {image:CarouselImage2, text:"Dry Fruits "},
    {image:CarouselImage3, text:"Legumes"}
]


// research carousel for mobile device
// consider creating card for mobile and card for desktop
const Carousel= () => {

    const {ref, previous, next, setCurrent, reset} = useCarousel();

    const transitionTime = 400;
    const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
    const smooth = `transform ${transitionTime}ms ease`;


    

    return (

        <div className={styles.carousel_container} >
            <div className={styles.carousel_image_text}>
                {carouselItems.map((item) => (
                    <>
                    <ul>
                        <li><Image className={styles.carousel_image} src={item.image} width={98} height={84} alt="carousel images" /></li>
                        <li>{item.text}</li>
                    </ul>
                    </>
                ))}  
            </div>
        </div>
    );
};

export default Carousel;




// <div className="carousel-container" >
//             <Carousel className="carousel-image-text"  ariaLabel="carousel of images with product items" renderArrowPrev={(onHandleClick: () => void, hasPrev: boolean, label: string) => React.ReactNode} renderArrowNext={(onHandleClick: () => void, hasNext:boolean, label:string) => React.ReactNode} autoPlay={true} emulateTouch={true} showStatus={false} showIndicators={false} showArrows={true}>
//                 {carouselItems.map((item) => (
//                     <>
//                     <ul>
//                         <li><Image className="carousel-image" src={item.image} width={98} height={84} alt="carousel images" /></li>
//                         <li>{item.text}</li>
//                     </ul>
//                     </>
//                 ))}  
//             </Carousel>
//         </div>