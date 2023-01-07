import React from "react";

// Components
import Header from "./../../components/Header";
import Specials from "./../../components/Specials";
import Testimonials from "./../../components/Testimonials";
import About from "./../../components/About";
import Footer from "./../../components/Footer";

function HomePage(props) {
  return (
    <>
      <Header />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default HomePage;
