import { FaUserGraduate, FaUserPlus, FaUserCheck } from "react-icons/fa";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { useSchoolData } from "../../context/SchoolDataContext";
import styles from "./StudentsStats.module.css";

const StudentsStats = () => {
  const { students } = useSchoolData();
  const activeStudents = students.filter((student) => student.status === "Active").length;
  const pendingStudents = students.filter((student) => student.status === "Pending").length;
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const newAdmissions = students.filter((student) => {
    const addedDate = new Date(student.addedAt || Date.now());
    return addedDate.getMonth() === currentMonth && addedDate.getFullYear() === currentYear;
  }).length;

  return (
    <section className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Total Students</p>
            <h3 className={styles.value}>{students.length.toLocaleString()}</h3>
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
            <h3 className={styles.value}>{newAdmissions.toLocaleString()}</h3>
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
            <h3 className={styles.value}>{activeStudents.toLocaleString()}</h3>
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
            <h3 className={styles.value}>{pendingStudents.toLocaleString()}</h3>
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
