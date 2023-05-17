import React from 'react';
import styles from './serv.module.css';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Services = () => {
  return (
    <>
     <section className={styles.Services}>
      <div className={styles.servTop}>
        <span>Not Just Another Web Dev Services!</span>
        <h1>Premium Website Design & Development Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor nulla eveniet repudiandae eius culpa, numquam nihil obcaecati corporis possimus sint, amet et, molestias quo. Distinctio sit hic nemo illo?</p>
      </div>
      <div className={styles.fourcol}>
      </div>
      </section> 
    </>
  );
}

export default Services;
