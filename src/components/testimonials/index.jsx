import React from "react";
import styles from "./testimonials-styles.module.css";

function Testimonials() {
  const { section, testimonial, image, text, container } = styles;

  return (
    <section className={section}>
      <div className={container}>
        <h1>Testimonials</h1>
        <div className={testimonials}>
          <div className={testimonial}>
            <h2>Rating</h2>
            <img />
          </div>
          <div className={testimonial}>
            <h2>Rating</h2>
            <img />
          </div>
          <div className={testimonial}>
            <h2>Rating</h2>
            <img />
          </div>
          <div className={testimonial}>
            <h2>Rating</h2>
            <img />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
