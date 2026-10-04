import styles from "../style/footer.module.css"
import logo from "../assets/footerLogo.svg"

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandArea}>
          <img src={logo} alt="Sachkriya logo" className={styles.logo} />

          <div className={styles.brandText}>
            <h3>Sachkriya</h3>
            <p>GENERAL TRADING W.L.L</p>
          </div>
        </div>

        <div className={styles.metaRow}>
          <span>© 2026 Sachkriya. All Rights Reserved.</span>

          <div className={styles.links}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
