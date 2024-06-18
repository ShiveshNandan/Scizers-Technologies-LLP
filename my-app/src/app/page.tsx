import HeroSection from "./components/HeroSection";
import './globals.css';
import Navbar from "./components/Navbar";
import FeaturesAndAmenities from "./components/FeaturesAndAmenities";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

// for the animation on scrool here I use the library AOS 
// for the image lightbox option I use the library react-image-lightbox 
// for the image optimization here I use the next/Image  

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeaturesAndAmenities/>
    <Carousel/>
    <Footer/>
    </>
  );
}
