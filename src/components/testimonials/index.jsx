import React from "react";
import styles from "./testimonials-styles.module.css";
import img1 from "./../../assets/images/d1.jpeg";
function Testimonials() {
  const { section, testimonials, testimonial, image, text, container } = styles;

  return (
    <section className={section}>
      <h1>Testimonials</h1>
      <div className={container}>
        <div className={testimonials}>
          <div className={testimonial}>
            <h2>Rating</h2>
            <div>
              <img src={img1} />
            </div>
          </div>
          <div className={testimonial}>
            <h2>Rating</h2>
            <div>
              <img src={img1} />
            </div>
          </div>
          <div className={testimonial}>
            <h2>Rating</h2>
            <div>
              <img src={img1} />
            </div>
          </div>
          <div className={testimonial}>
            <h2>Rating</h2>
            <div>
              <img src={img1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
