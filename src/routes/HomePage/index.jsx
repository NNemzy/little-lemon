import React from "react";

// Components
import Header from "../../components/Header/index.jsx";
import Specials from "../../components/specials/index.jsx";
import Testimonials from "../../components/testimonials/index.jsx";
import About from "../../components/About/index.jsx";
import Footer from "../../components/footer/index.jsx";

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
