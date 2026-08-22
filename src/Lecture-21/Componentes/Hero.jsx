import styles from "../Styles/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <p className={styles.tag}>WELCOME TO NOVATECH</p>

          <h1 className={styles.heading}>
            Building Digital
            <span> Experiences </span>
            That Matter
          </h1>

          <p className={styles.description}>
            We create modern websites, applications, and digital solutions
            that help businesses grow and connect with their customers.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryButton}>
              View Our Work
            </button>

            <button className={styles.secondaryButton}>
              Contact Us
            </button>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.statCard}>
            <h2>120+</h2>
            <p>Projects Completed</p>
          </div>

          <div className={styles.statCard}>
            <h2>50+</h2>
            <p>Happy Clients</p>
          </div>

          <div className={styles.statCard}>
            <h2>25+</h2>
            <p>Team Members</p>
          </div>

          <div className={styles.statCard}>
            <h2>5+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;