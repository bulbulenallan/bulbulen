import React from 'react'
import NavbarLinks from './NavbarLinks';
import styles from './Navbar.modules.css';


const navLinks = [
    {id:"home",label:"Home"},
    {id:"about",label:"About"},
    {id:"portfolio",label:"Portfolio"},
    {id:"testimonials",label:"Testimonials"},
    {id:"contact",label:"Contact"},

];
const Navbar = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles['navbar-wrapper']}>
                    <div>
                        <a href="index.html" className={styles.logo}>
                            <img src="./image/c1.jpeg" alt="Bulbulen Allan Kipchumba" />
                            <div className={styles['logo-inner']}>
                                <span className={styles.top}> Bulbulen Allan Kipchumba</span>
                                <br />
                                <span className={styles.bottom}>Web Developer</span>

                            </div>
                        </a>
                    </div>
                    <div className={styles['navbar-links']}>
                        <ul>
                            {navLinks.map((link) => (
                                <NavbarLinks
                                    key={link.id}
                                    href={`#${link.id}`}
                                    label={link.label}
                                />
                                
                            ))}
                        </ul>
                    </div>
                    <div className={styles['toggle-button']}>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>

                    </div>

                </div>
            </div>

        </nav>

    </header>
  )
}

export default Navbar