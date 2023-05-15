"use client";
import React, { useEffect  } from 'react';
import styles from './comp.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { GoPrimitiveDot } from 'react-icons/go';
import Logo from '../assets/arshcode.png';

const Footer = () => {
    const Year = new Date().getFullYear();
      //Select Search:
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "z") {
      document.getElementById("search-input").select();
    }
  });
  useEffect(() => {
    const cpuUsage = performance.now();

    if (cpuUsage <= 50) {
      document.getElementById("sys-stats").innerHTML = "All systems normal.";
    } else if (cpuUsage > 50 && cpuUsage <= 80) {
      document.getElementById("sys-stats").innerHTML = "All systems Moderate.";
    } else {
      document.getElementById("sys-stats").innerHTML = "All systems High.";
    }
  }, []);
  return (
    <>
    <footer className={styles.footer}>
        <div className={styles.foottop}>
            <div className={styles.logoHolder}>
            <div className={styles.logo}>
                <Image src={Logo} alt='Logo'/>
            </div>
            <div className={styles.logotext}>
                <span>Arshcode</span>
            </div>
            </div>
            <div className={styles.search}>
              <input
                type="search"
                placeholder="Press Ctrl + Z to search Across Arshcode"
                id="search-input"
              /><span><GoPrimitiveDot/> <span id='sys-stats'></span></span>
            </div>
        </div>
        <div className={styles.footmid}>
          <Link href='/'>Home</Link>
          <Link href='/'>Documentations</Link>
          <Link href='/'>Sponsorships</Link>
          <Link href='/'>Contact Sales</Link>
          <Link href='/'>Carrers</Link>
          <Link href='/'>Enterprise</Link>
          <Link href='/'>Changelog</Link>
          <Link href='/'>Pricing</Link>
          <Link href='/'>Advertisements</Link>
          <Link href='/'>Legal</Link>
        </div>
        <div className={styles.footbottom}>
          &copy; {Year} Arshcode | All rights reserved
        </div>
</footer>

    </>
  );
}

export default Footer;
