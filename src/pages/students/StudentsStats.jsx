import { FaUserGraduate, FaUserPlus, FaUserCheck } from "react-icons/fa";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import styles from "./StudentsStats.module.css";

const StudentsStats = () => {
  return (
    <section className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Total Students</p>
            <h3 className={styles.value}>1,452</h3>
          </div>
          <div className={styles.iconBox}>
            <FaUserGraduate />
          </div>
        </div>
        <p className={styles.hint}>All registered students</p>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>New Admissions</p>
            <h3 className={styles.value}>88</h3>
          </div>
          <div className={styles.iconBox}>
            <FaUserPlus />
          </div>
        </div>
        <p className={styles.hint}>Added this term</p>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Active Students</p>
            <h3 className={styles.value}>1,390</h3>
          </div>
          <div className={styles.iconBox}>
            <FaUserCheck />
          </div>
        </div>
        <p className={styles.hint}>Currently attending</p>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Pending Cases</p>
            <h3 className={styles.value}>62</h3>
          </div>
          <div className={styles.iconBox}>
            <HiClipboardDocumentCheck />
          </div>
        </div>
        <p className={styles.hint}>Require review</p>
      </div>
    </section>
  );
};

export default StudentsStats;