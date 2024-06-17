import Image from "next/image";
import HeraSection from "./components/HeraSection";
import './globals.css';
import Navbar from "./components/Navbar";
import FeaturesAndAmenities from "./components/FeaturesAndAmenities";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeraSection/>
    <FeaturesAndAmenities/>
    </>
  );
}
