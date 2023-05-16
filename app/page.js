"use client";
import { useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import * as OV from 'online-3d-viewer';
import HeroImg from './assets/5.png';

function initOpenSeadragon() {
  OV.SetExternalLibLocation('libs');
  OV.Init3DViewerElements();
}

export default function Home() {
  useEffect(() => {
    initOpenSeadragon();
  }, []);
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.herocont}>
          <div className={styles.text}>
            <span>#No.1 Web Development Agency In India</span>
            <h1>Empowering Your Business With Dynamic-Flaming Web Solutions</h1>
            <p>Arshcode is a full-service web development agency specializing in creating bespoke web solutions tailored to meet your unique business needs.</p>
            <button>Contact Us</button>
          </div>
          <div className={styles.image}>
            <div class="online_3d_viewer"
              style={{ width: '100%', height: '600px' }}
              model="/iron_man.glb"
              >
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

