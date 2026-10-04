import styles from "../style/containerThree.module.css"
import globalSourcingIcon from "../assets/Huge-icon.svg"
import importExportIcon from "../assets/Huge-icon-1.svg"
import tradingSupplyIcon from "../assets/Huge-icon-2.svg"
import marketAccessIcon from "../assets/Huge-icon-3.svg"
import businessPartnershipIcon from "../assets/Users Group Rounded.svg"

const services = [
  {
    title: "Global Sourcing",
    text: "Finding the right products and suppliers for your needs.",
    icon: globalSourcingIcon,
  },
  {
    title: "Import & Export",
    text: "Facilitating international trade with efficient coordination.",
    icon: importExportIcon,
  },
  {
    title: "Trading & Supply",
    text: "Reliable supply channels across multiple industries.",
    icon: tradingSupplyIcon,
  },
  {
    title: "Market Access",
    text: "Helping businesses enter new markets and find opportunities.",
    icon: marketAccessIcon,
  },
  {
    title: "Business Partnerships",
    text: "Building long-term relationships for sustainable growth.",
    icon: businessPartnershipIcon,
  },
]

const ContainerThree = () => {
  return (
    <section id="ourServices" className={styles.servicesSection}>
      <div className={styles.headerRow}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>OUR SERVICES</span>
        </div>
      </div>

      <div className={styles.contentRow}>
        <h2 className={styles.title}>Connecting Supply with Opportunity</h2>

        <p className={styles.introText}>
          We provide end-to-end trading and sourcing solutions designed to
          support businesses across global markets.
        </p>
      </div>

      <div className={styles.serviceGrid}>
        {services.map(({ title, text, icon }) => (
          <article key={title} className={styles.serviceCard}>
            <div className={styles.iconWrap}>
              <img src={icon} alt={title} className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>{title}</h3>
            <p className={styles.serviceText}>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ContainerThree
