import { FaUserGraduate, FaChalkboardTeacher, FaDollarSign } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { useSchoolData } from "../../context/SchoolDataContext";
import styles from "./StatsCards.module.css";

const StatsCards = () => {
  const { students, teachers } = useSchoolData();

  const activeStudents = students.filter((student) => student.status === "Active").length;
  const activeTeachers = teachers.filter((teacher) => teacher.status === "Active").length;
  const overallGpa = students.length ? (2.8 + activeStudents / students.length).toFixed(2) : "0.00";
  const revenue = students.length * 280;

  return (
    <section className={styles.statsGrid}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Total Students</p>
            <h3 className={styles.value}>{students.length.toLocaleString()}</h3>
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
            <h3 className={styles.value}>{teachers.length.toLocaleString()}</h3>
          </div>
          <div className={styles.iconBox}>
            <FaChalkboardTeacher />
          </div>
        </div>
        <p className={styles.subtext}>{activeTeachers} currently active</p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div>
            <p className={styles.label}>Overall GPA</p>
            <h3 className={styles.value}>{overallGpa}</h3>
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
            <h3 className={styles.value}>${(revenue / 1000).toFixed(1)}k</h3>
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
