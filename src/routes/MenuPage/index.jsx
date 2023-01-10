import React from "react";
import { NavLink } from "react-router-dom";

import { menu } from "./const";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Styles
import styles from "./menu-styles.module.css";

function MenuPage() {
  const { section, title, text, container, special } = styles;
  return (
    <section className={section}>
      <div className={title}>
        <h1>Menu Page</h1>
      </div>
      <div className={container}>
        {menu.map(({ src, heading, price, p }) => (
          <div className={special} key={src}>
            <img src={src} />
            <div className={text}>
              <h3>
                {heading} <span className={styles.price}>${price}</span>
              </h3>
              <p>{p}</p>
              <NavLink to="/booking">Book</NavLink>
              <FontAwesomeIcon icon={faChevronRight} size="1x" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPage;
