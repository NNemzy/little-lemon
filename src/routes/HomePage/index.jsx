import React from "react";

// Components
import Header from "../../components/header";
import Specials from "../../components/specials";
import Testimonials from "../../components/testimonials";
import About from "../../components/about";
import Footer from "../../components/footer";

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
