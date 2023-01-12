import React from "react";
import styles from "./nav-styles.module.css";
import { NavLink } from "react-router-dom";

import logo from "./../../assets/logos/asset16.png";

function Nav() {
  const navigationLinks = ["About", "Menu", "Booking"];

  // const { navigation, logo, list } = styles;

  return (
    <nav className={styles.navigation}>
      <NavLink to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </NavLink>
      <ul className={styles.list}>
        <li key={"home"}>
          <NavLink className={styles.link} to={"/"}>
            Home
          </NavLink>
        </li>
        {navigationLinks.map((link) => (
          <li key={link.toLowerCase()}>
            <NavLink className={styles.link} to={link.toLocaleLowerCase()}>
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
