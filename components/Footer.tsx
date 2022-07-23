import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import Logo from "../public/logo.png"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
          <article>
            <h2>Book a call with me</h2>
            <p className={styles.desktop}>
              I’d love to have a chat to see how I can help you. The best first
              <br/>
              step is for us to discuss your project during a free consultation.
              <br/>
              Then we can move forward from there.
            </p>
            <p className={styles.tablet}>
              I’d love to have a chat to see how I can help you. The best first
              <br/>
              step is for us to discuss your project during a free consultation.
              <br/>
              Then we can move forward from there.
            </p>
            <p className={styles.mobile}>
              I’d love to have a chat to see how I can 
              <br/>
              help you. The best first step is for us to
              <br/>
              discuss your project during a free
              <br/>
              consultation. Then we can move
              <br/>
              forward from there.
            </p>
          </article>
          <button type="button">Free Consultation</button>
        </div>
        <nav className={styles.nav}>
          <button type="button">
            <Image src={Logo} placeholder="blur"/>
          </button>
          <button type="button">Free Consultation</button>
        </nav>
      </footer>
  )
}

export default Footer