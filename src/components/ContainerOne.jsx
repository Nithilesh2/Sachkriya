import styles from "../style/containerOne.module.css"
import image from "../assets/Container1Bg.png"
import rightArrow from "../assets/rightArrow.svg"

const ContainerOne = () => {
  return (
    <section id="home" className={styles.containerOne}>
      <div className={styles.left}>
        <h1 className={styles.top}>
          Global Trade.
          <h2 className={styles.inMotion}>In Motion.</h2>
        </h1>
        <div className={styles.middle}>
          Connecting people, products and possibilities across markets.
        </div>
        <button className={styles.bottom}>
          Explore Our Services <img className={styles.rightArrow} src={rightArrow} alt="right arrow" />
        </button>
      </div>
      <div className={styles.right}>
        <img
          className={styles.image}
          src={image}
          alt="Global Trade In Motion"
        />
      </div>
    </section>
  )
}

export default ContainerOne
