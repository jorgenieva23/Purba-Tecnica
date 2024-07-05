// /components/Header.js
"use client";

import styles from "../styles/Header.module.css";
import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

const NAV_ITEMS = [
  { label: "Home", page: "about" },
  { label: "Interests", page: "interests" },
  { label: "Contact", page: "contact" },
];

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <Link to="home" smooth={true} duration={500}>
            <div className={styles.logoContainer}>
              <h2 className={styles.logo}>Jorge Nieva</h2>
            </div>
          </Link>
          <div className={styles.menuButton}>
            <button
              className={styles.menuIcon}
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
        <div className={`${styles.navMenu} ${navbar ? styles.navActive : ""}`}>
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className={styles.navLink}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(!navbar)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
