import React from "react";
import styles from "./footer-styles.module.css";
import logo from "./../../assets/logos/asset18.png";

import { NavLink } from "react-router-dom";

function Footer() {
  const { footer, container, imageContainer, navigation, contacts, socials } =
    styles;
  const navigationLinks = ["About", "Menu", "Booking"];
  const contactLinks = ["Address", "Phone Number", "Email"];
  const socialLinks = ["Address", "Phone Number", "Email"];

  return (
    <footer className={footer}>
      <div className={container}>
        <div className={imageContainer}>
          <img src={logo} className={styles.logo} />
        </div>
        <ul className={navigation}>
          <li>
            <h3>Navigation Links</h3>
          </li>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {navigationLinks.map((item) => (
            <li key={item.toLowerCase()}>
              <NavLink to={item.toLocaleLowerCase()}>{item}</NavLink>
            </li>
          ))}
        </ul>
        <ul className={contacts}>
          <li>
            <h3>Contact Links</h3>
          </li>
          {contactLinks.map((item) => (
            <li key={item.toLowerCase()}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
        <ul className={socials}>
          <li>
            <h3>Social Links</h3>
          </li>
          {socialLinks.map((item) => (
            <li key={item.toLowerCase()}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
