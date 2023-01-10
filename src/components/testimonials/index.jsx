import React from "react";
import styles from "./testimonials-styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { test } from "./const";

function Testimonials() {
  const { section, testimonials, testimonial, image, text, container } = styles;

  return (
    <section className={section}>
      <h1>Testimonials</h1>
      <div className={container}>
        <div className={testimonials}>
          {test.map((person) => (
            <div key={person.name} className={testimonial}>
              <h2>
                Rating:
                <span className={styles.rating} style={{ color: "yellow" }}>
                  {person.rating}
                  <FontAwesomeIcon
                    icon={faStar}
                    className={styles.star}
                    size="1x"
                    spin
                  />
                </span>
              </h2>
              <div>
                <img src={person.src} />
              </div>
              <p>{person.text}</p>
            </div>
          ))}
          {/* <div className={testimonial}>
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
