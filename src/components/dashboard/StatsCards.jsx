import { FaUserGraduate, FaChalkboardTeacher, FaDollarSign } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import styles from "./StatsCards.module.css";

const StatsCards = () => {
  return (
    <section className={styles.statsGrid}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Total Students</p>
            <h3 className={styles.value}>1,452</h3>
          </div>
          <div className={styles.iconBox}>
            <FaUserGraduate />
          </div>
        </div>
        <p className={styles.subtext}>Across all grades</p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Total Teachers</p>
            <h3 className={styles.value}>112</h3>
          </div>
          <div className={styles.iconBox}>
            <FaChalkboardTeacher />
          </div>
        </div>
        <p className={styles.subtext}>Currently active</p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Overall GPA</p>
            <h3 className={styles.value}>3.8</h3>
          </div>
          <div className={styles.iconBox}>
            <PiCertificateFill />
          </div>
        </div>
        <p className={styles.subtext}>Average performance</p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Revenue</p>
            <h3 className={styles.value}>$24.5k</h3>
          </div>
          <div className={styles.iconBox}>
            <FaDollarSign />
          </div>
        </div>
        <p className={styles.subtext}>Collected this month</p>
      </div>
    </section>
  );
};

export default StatsCards;