import Image from 'next/image';
import HeroImg from './assets/1.png';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.herocont}>
      <div className={styles.text}>
        <h1>Empowering Your Business With Dynamic-Flaming Web Solutions</h1>
        <p>Arshcode is a full-service web development agency specializing in creating bespoke web solutions tailored to meet your unique business needs.</p>
        <button>Contact Us</button>
      </div>
      <div className={styles.image}>
        <Image src={HeroImg} alt="Hero Image" />
      </div>
      </div>
    </section>
    </>
  )
}
