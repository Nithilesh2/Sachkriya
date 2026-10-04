import { useEffect, useState } from "react"
import styles from "../style/header.module.css"
import logo from "../assets/Header_Logo.svg"
import COLORS from "../colors"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (event, sectionId) => {
    event.preventDefault()

    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      style={{
        "--color-white": COLORS.WHITE,
        "--color-green": COLORS.GREEN,
        "--color-black": COLORS.BLACK,
        "--color-dark": COLORS.DARK,

        // Glass effect
        background: "rgba(255, 255, 255, 0.38)",
        backdropFilter: "blur(18px) saturate(1.35)",
        WebkitBackdropFilter: "blur(18px) saturate(1.35)",
      }}
    >
      <div className={styles.left}>
        <button
          type="button"
          className={styles.logoButton}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <img
            src={logo}
            alt="logo"
            className={styles.logoImage}
            draggable="false"
          />
        </button>
      </div>

      <div className={styles.right}>
        <ul className={styles.headerDetailsLeft}>
          <li className={styles.headerDetailsText}>
            <a href="#" onClick={(event) => scrollToSection(event, "home")}>
              Home
            </a>
          </li>

          <li className={styles.headerDetailsText}>
            <a href="#" onClick={(event) => scrollToSection(event, "about")}>
              About
            </a>
          </li>

          <li className={styles.headerDetailsText}>
            <a
              href="#"
              onClick={(event) => scrollToSection(event, "ourServices")}
            >
              Our Services
            </a>
          </li>

          <li className={styles.headerDetailsText}>
            <a href="#" onClick={(event) => scrollToSection(event, "products")}>
              Products
            </a>
          </li>

          <li className={styles.headerDetailsText}>
            <a href="#" onClick={(event) => scrollToSection(event, "global")}>
              Global Reach
            </a>
          </li>

          <li className={styles.headerDetailsText}>
            <a href="#" onClick={(event) => scrollToSection(event, "contact")}>
              Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={styles.headerDetailsRight}
          onClick={(event) => scrollToSection(event, "contact")}
        >
          <div className={styles.squareDot} />
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Header