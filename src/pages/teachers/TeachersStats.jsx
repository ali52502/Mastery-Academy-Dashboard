import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import styles from "./TeachersStats.module.css";

const TeachersStats = () => {
  return (
    <section className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Total Teachers</p>
            <h3 className={styles.value}>112</h3>
          </div>
          <div className={styles.iconBox}>
            <FaChalkboardTeacher />
          </div>
        </div>
        <p className={styles.hint}>All faculty members</p>
      </div>

      <div className={`${styles.statCard} ${styles.teal}`}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Departments</p>
            <h3 className={styles.value}>12</h3>
          </div>
          <div className={styles.iconBox}>
            <MdApartment />
          </div>
        </div>
        <p className={styles.hint}>Academic divisions</p>
      </div>

      <div className={styles.statCard}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>On Leave</p>
            <h3 className={styles.value}>5</h3>
          </div>
          <div className={styles.iconBox}>
            <FaUsers />
          </div>
        </div>
        <p className={styles.hint}>Temporary leave status</p>
      </div>

      <div className={`${styles.statCard} ${styles.teal}`}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Pending Cases</p>
            <h3 className={styles.value}>8</h3>
          </div>
          <div className={styles.iconBox}>
            <HiClipboardDocumentCheck />
          </div>
        </div>
        <p className={styles.hint}>Need review or approval</p>
      </div>
    </section>
  );
};

export default TeachersStats;