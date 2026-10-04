import styles from "../style/containerSix.module.css"
import bannerGraphic from "../assets/Container3Img.png"

const ContainerSix = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.visualWrap}>
        <img src={bannerGraphic} alt="Abstract green product form" className={styles.visual} />
      </div>

      <div className={styles.contentWrap}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>Partner with us</span>
        </div>

        <h2 className={styles.title}>Let’s Move Something Forward.</h2>

        <p className={styles.description}>
          Whether you are looking to source a product, enter a new market, or
          explore a trading opportunity, we’re ready to connect.
        </p>

        <button type="button" className={styles.ctaButton}>
          Start a Conversation <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  )
}

export default ContainerSix
