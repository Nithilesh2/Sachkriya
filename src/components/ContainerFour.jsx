import styles from "../style/containerFour.module.css"

const categories = [
  "Industrial Products",
  "Industrial Products",
  "Industrial Products",
  "Industrial Products",
  "Industrial Products",
  "Industrial Products",
]

const ContainerFour = () => {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.outer}>
        <div className={styles.headerRow}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>PRODUCT CATEGORIES</span>
          </div>
        </div>

        <div className={styles.contentRow}>
          <h2 className={styles.title}>A Diverse Trading Portfolio</h2>

          <p className={styles.introText}>
            Our sourcing network enables us to work across a wide range of
            product categories, tailored to market and client requirements.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((item, index) => (
            <div key={index} className={styles.categoryCard}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContainerFour
