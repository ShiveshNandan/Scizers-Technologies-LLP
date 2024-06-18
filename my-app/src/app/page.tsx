import Image from "next/image";
import HeraSection from "./components/HeraSection";
import './globals.css';
import Navbar from "./components/Navbar";
import FeaturesAndAmenities from "./components/FeaturesAndAmenities";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeraSection/>
    <FeaturesAndAmenities/>
    <Carousel/>
    <Footer/>
    </>
  );
}
