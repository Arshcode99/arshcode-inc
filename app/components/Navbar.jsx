"use client";
import React, { useState } from 'react';
import styles from './comp.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/arshcode.png';
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {

  const [display, setDisplay] = useState('flex');

  function OpenMenu() {
    if (display === 'flex') {
      setDisplay('none');
    } else {
      setDisplay('flex');
    }
  }

  return (
    <>
     <header className={styles.header}>
      <div className={styles.logo} title='Arshcode'>
        <Image src={Logo} alt="Arshcode" />
      </div>
      <div className={styles.links} id='menu' style={{ display }}>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/">Products</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Blogs</Link>
      </div>
      <div className={styles.icons}>
        <div className={styles.ico}><FaGithub/></div>
        <div className={styles.ico}><FaInstagram/></div>
        <div className={styles.ico}><FaWhatsapp/></div>
        <div className={styles.menuico} onClick={OpenMenu}><RiMenu3Line/></div>
      </div>
     </header>
    </>
  );
}

export default Navbar;
