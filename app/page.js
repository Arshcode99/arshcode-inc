import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.heroSection}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted>
          <source src="/bg-arshcode.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Arshcode - Your One-Stop Shop for Web Development</h1>
        <p>We offer innovative web development solutions that help your business grow.</p>
        <a href="#" className={styles.ctaButton}>Get Started</a>
      </div>
    </div>
    </>
  )
}
