import styles from "../style/containerTwo.module.css"
import image from "../assets/Container2Img.png"
import rightArrow from "../assets/rightArrow.svg"

const ContainerTwo = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.left}>
        <h1 className={styles.eyebrow}>
          <div className={styles.roundGreen} />
          About sachkriya
        </h1>
        <h2 className={styles.header}>At the Centre of Every Connection</h2>
        <p className={styles.paraOne}>
          Sachkriya is a global general trading company connecting supliers,
          businesses, products and markets across borders.
        </p>
        <p className={styles.paraTwo}>
          We bring the right connections together - creating dependable pathways
          for trade and new opportunities.
        </p>
        <button className={styles.button}>
          Our Story
          <img
            className={styles.rightArrow}
            src={rightArrow}
            alt="right arrow"
          />
        </button>
      </div>
      <div className={styles.right}>
        <img className={styles.image} src={image} alt="Connections today. A more open tomorrow." />
      </div>
    </section>
  )
}

export default ContainerTwo
