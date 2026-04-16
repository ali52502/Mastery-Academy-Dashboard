import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.dot}></span>
          <span className={styles.brandName}>Mastery Academy</span>
        </div>

        <p className={styles.text}>
          © {new Date().getFullYear()} All Rights Reserved | Designed & Developed by{" "}
          <span className={styles.name}>Ali Hamada</span>
        </p>

        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Portfolio
          </a>
          <span className={styles.sep}>•</span>
          <a href="#" className={styles.link}>
            GitHub
          </a>
          <span className={styles.sep}>•</span>
          <a href="#" className={styles.link}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;