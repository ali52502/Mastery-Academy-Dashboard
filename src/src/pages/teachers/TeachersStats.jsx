import { FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { useSchoolData } from "../../context/SchoolDataContext";
import styles from "./TeachersStats.module.css";

const TeachersStats = () => {
  const { teachers } = useSchoolData();
  const departments = new Set(teachers.map((teacher) => teacher.department).filter(Boolean));
  const onLeave = teachers.filter((teacher) => teacher.status === "On Leave").length;
  const pending = teachers.filter((teacher) => teacher.status === "Pending").length;

  return (
    <section className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Total Teachers</p>
            <h3 className={styles.value}>{teachers.length.toLocaleString()}</h3>
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
            <h3 className={styles.value}>{departments.size.toLocaleString()}</h3>
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
            <h3 className={styles.value}>{onLeave.toLocaleString()}</h3>
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
            <h3 className={styles.value}>{pending.toLocaleString()}</h3>
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
