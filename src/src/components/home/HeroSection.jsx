import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <span className={styles.welcomeText}>Welcome to</span>

        <h2 className={styles.academyName}>Mastery Academy</h2>

        <h1 className={styles.title}>
          A Smart Academy Platform for Students, Teachers, and Administration
        </h1>

        <p className={styles.description}>
          Welcome to Mastery Academy, a modern educational platform designed to
          support the academy experience for everyone. Current dashboard access
          is available for administrators only.
        </p>

        <div className={styles.actions}>
          <Link to="/login" className={styles.loginButton}>
            Admin Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;