import { useEffect, useState } from "react"
import styles from "../style/header.module.css"
import logo from "../assets/Header_Logo.svg"
import COLORS from "../colors"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    setIsMenuOpen(false)

    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      style={{
        "--color-white": COLORS.WHITE,
        "--color-green": COLORS.GREEN,
        "--color-black": COLORS.BLACK,
        "--color-dark": COLORS.DARK,
        background: "rgba(255, 255, 255, 0.38)",
        backdropFilter: "blur(18px) saturate(1.35)",
        WebkitBackdropFilter: "blur(18px) saturate(1.35)",
      }}
    >
      <div className={styles.headerInner}>
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

        <nav className={styles.right} aria-label="Main navigation">
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
        </nav>

        <button
          type="button"
          className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.open : ""}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.mobileMenuList}>
          <li>
            <a href="#" onClick={(event) => scrollToSection(event, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => scrollToSection(event, "about")}>
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(event) => scrollToSection(event, "ourServices")}
            >
              Our Services
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => scrollToSection(event, "products")}>
              Products
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => scrollToSection(event, "global")}>
              Global Reach
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => scrollToSection(event, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header