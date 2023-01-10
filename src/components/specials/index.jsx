import React from "react";
import styles from "./specials-styles.module.css";
import img1 from "./../../../src/assets/images/d1.jpeg";
import img2 from "./../../../src/assets/images/d4.jpeg";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Specials() {
  const { title, container, special, text, section, book } = styles;

  return (
    <section className={section}>
      <div className={title}>
        <h1>Specials</h1>
        <button className={book}>
          <NavLink to="/booking">Online order</NavLink>
        </button>
      </div>
      <div className={container}>
        <div className={special}>
          <img src={img1} />
          <div className={text}>
            <h3>Greek Salad</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              magni pariatur ipsum. Libero corrupti dicta, expedita odio vel
              veritatis optio aspernatur officia aliquid ipsam nulla earum?
              Recusandae quas sequi sint!
            </p>
            <NavLink to="/booking">Book</NavLink>
            <FontAwesomeIcon icon={faChevronRight} size="1x" />
          </div>
        </div>
        <div className={special}>
          <img src={img2} />
          <div className={text}>
            <h3>Greek Salad</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              magni pariatur ipsum. Libero corrupti dicta, expedita odio vel
              veritatis optio aspernatur officia aliquid ipsam nulla earum?
              Recusandae quas sequi sint!
            </p>
            <NavLink to="/booking">Book</NavLink>
            <FontAwesomeIcon icon={faChevronRight} size="1x" />
          </div>
        </div>
        <div className={special}>
          <img src={img1} />
          <div className={text}>
            <h3>Greek Salad</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              magni pariatur ipsum. Libero corrupti dicta, expedita odio vel
              veritatis optio aspernatur officia aliquid ipsam nulla earum?
              Recusandae quas sequi sint!
            </p>
            <NavLink to="/booking">Book</NavLink>
            <FontAwesomeIcon icon={faChevronRight} size="1x" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
