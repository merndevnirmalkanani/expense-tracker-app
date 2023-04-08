import React, { useEffect } from "react";
import { fetchAllData } from "../../../Config/Config";
const Hero = React.lazy(() => import("../Hero/Hero"));
const Features = React.lazy(() => import("../Features/Features"));
const Navbar = React.lazy(() => import("../../Global/Navbar/Navbar"));
const Footer = React.lazy(() => import("../../Global/Footer/Footer"));

const Main = () => {
  useEffect(() => {
    fetchAllData()
  })
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default Main;
