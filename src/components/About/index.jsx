import React from "react";
import styles from "./about-styles.module.css";
import img from "./../../assets/images/d4.jpeg";

function About() {
  const { section, text, container, image, imageContainer } = styles;

  return (
    <section className={section}>
      <div className={container}>
        <div className={text}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum has been the industry's standard
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s. ever since the 1500s.Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className={imageContainer}>
          <img className={image} src={img} />
        </div>
      </div>
    </section>
  );
}

export default About;
