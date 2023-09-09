import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from '../styles/nav.module.css'

function Navbar() {


    const [isStylingOne, setIsStylingOne] = useState(true);

    const toggleDropdown = () => {
        const dropdown = document.querySelector(`.${styles.dropdown}`);
        dropdown.classList.toggle(styles.showDropdown);
    };
    const navRef = React.useRef()
    const showNavbar = () => {
        // alert("clicked")
        console.log(navRef.current)
        navRef.current.classList.toggle("responsive_nav")
        setIsStylingOne(!isStylingOne)
    }
    // Function to toggle the styling on button click
    return (
        <header className={styles.navbar}>
            <h3>Manzar-e-Mussawir</h3>
            <nav className={isStylingOne ? `${styles.hide} ${styles.nav}` : `${styles.show} ${styles.nav}`} ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <div className={`${styles.linkWithDropdown}`} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <a href="/#" className={styles.link}>
                        Artists<span className={styles.arrow}>&#x25bc;</span>
                    </a>
                    <div className={styles.dropdown}>
                        <ul>
                            <li><a href="./galleryReg.html">Gallery Registration</a></li>
                            <li><a href="./ExpoReg.html">Expo Registration</a></li>
                            <li><a href="./FutureArtistsReg.html">Future Artists</a></li>
                        </ul>
                    </div>
                </div>

                <a href="/#">sponsor</a>
                <a href="/#">contact</a>
                <button onClick={showNavbar} className={`${styles.nav_btn} ${styles.nav_close_btn}`}>
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showNavbar} className={styles.nav_btn}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;