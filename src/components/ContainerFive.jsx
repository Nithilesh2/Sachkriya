import styles from "../style/containerFive.module.css"

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "We understand your requirements.",
  },
  {
    number: "02",
    title: "Source",
    text: "We identify the right suppliers.",
  },
  {
    number: "03",
    title: "Evaluate",
    text: "We assess the options for best fit.",
  },
  {
    number: "04",
    title: "Coordinate",
    text: "We manage the process.",
  },
  {
    number: "05",
    title: "Deliver",
    text: "We support through to delivery.",
  },
]

const ContainerFive = () => {
  return (
    <section id="global" className={styles.processSection}>
      <div className={styles.headerRow}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>OUR PROCESS</span>
        </div>
      </div>

      <div className={styles.contentRow}>
        <h2 className={styles.title}>From Requirement to Delivery</h2>

        <p className={styles.introText}>
          A clear and reliable process to keep your business moving.
        </p>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={step.number} className={styles.stepItem}>
            <div className={styles.nodeWrap}>
              <div className={styles.nodeNumber}>{step.number}</div>
              {index !== steps.length - 1 && (
                <div className={styles.connector} />
              )}
              {index !== steps.length - 1 && (
                <div className={styles.connectorDot} />
              )}
            </div>

            <div className={styles.stepContent}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContainerFive
