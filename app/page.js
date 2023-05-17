"use client";
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HeroImg from './assets/4.png';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.herocont}>
          <div className={styles.text}>
            <span>#No.1 Web Development Agency In India</span>
            <h1>Empowering Your Business With Dynamic-Flaming Web Solutions</h1>
            <p>Arshcode is a full-service web development agency specializing in creating bespoke web solutions tailored to meet your unique business needs.</p>
            <div className={styles.formholder}>
              <label>Connect Instantly Via Our Fast Networks</label>
              <form className={styles.form}>
              <input type="email" id="email" placeholder='Enter Your Email.' />
              <button>Connect Instantly</button>
              <Link href='/' className={styles.actbtn}>Browse Services</Link>
              </form>
            </div>
          </div>
          <div className={styles.image}>
           <Image src={HeroImg} alt="Hero Image"/>
          </div>
        </div>
      </section>
    </>
  );
}

