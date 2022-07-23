import React from "react";
import styles from "../styles/Home.module.css"
import Profile from "../public/profile.png"
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <figure>
        <Image src={Profile} placeholder="blur" />
      </figure>
      <article>
        <h2 className={styles.desktop}>
          I’m Amy, and I’d love to
          <br />
          work on your next project
        </h2>
        <h2 className={styles.tablet}>
          I’m Amy, and I’d love
          <br />
          to work on your next
          <br />
          project
        </h2>
        <h2 className={styles.mobile}>
          I’m Amy, and I’d love to
          <br />
          work on your next project
        </h2>
        <p className={styles.desktop}>
          I love working with others to create beautiful design solutions.
          <br />
          I’ve designed everything from brand illustrations to complete
          <br />
          mobile apps. I’m also handy with a camera!
        </p>
        <p className={styles.tablet}>
          I love working with others to create
          <br />
          beautiful design solutions. I’ve
          <br />
          designed everything from brand
          <br />
          illustrations to complete mobile apps.
          <br />
          I’m also handy with a camera!
        </p>
        <p className={styles.mobile}>
          I love working with others to create beautiful
          <br />
          design solutions. I’ve designed everything
          <br />
          from brand illustrations to complete mobile
          <br />
          apps. I’m also handy with a camera!
        </p>
        <button type="button">Free Consultation</button>
      </article>
    </div>
  );
};

export default About;
