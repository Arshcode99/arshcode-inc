"use client";
import React from 'react';
import styles from './comp.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/arshcode.png';
import { FaGithub, FaInstagram, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import { useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.style.backgroundColor = "#f1f1f1";
      document.body.style.color = "#1f1f1f";
    } else {
      document.body.style.backgroundColor = "#1f1f1f";
      document.body.style.color = "#f1f1f1";
    }
  };
  return (
    <>
     <header className={styles.header}>
      <div className={styles.logo} title='Arshcode'>
        <Image src={Logo} alt="Some" />
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/">Services</Link>
        <Link href="/">Products</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Blogs</Link>
      </div>
      <div className={styles.icons}>
        <div className={styles.ico}><FaGithub/></div>
        <div className={styles.ico}><FaInstagram/></div>
        <div className={styles.ico}><FaWhatsapp/></div>
        <div className={styles.ico} onClick={toggleDarkMode}>{isDarkMode ? <FaSun /> : <FaMoon />}</div>
      </div>
     </header>
    </>
  );
}

export default Navbar;
