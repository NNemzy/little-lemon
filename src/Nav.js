import React from "react";

function Nav() {
  const navigation = [
    "Home",
    "About",
    "Menun",
    "Reservations",
    "Order Online",
    "Log In",
  ];

  return (
    <nav>
      <p>logo</p>
      <ul>
        {navigation.map((link) => (
          <li key={link.toLowerCase()}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
