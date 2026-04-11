import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa6";
import styles from "./StatsOverview.module.css";

const StatsOverview = () => {
  return (
    <section className={styles.grid}>
      <div className={styles.card}>
        <div className={styles.top}>
          <div>
            <p className={styles.label}>Attendance Rate</p>
            <h3 className={styles.value}>92%</h3>
          </div>
          <div className={styles.iconBox}>
            <MdShowChart />
          </div>
        </div>
        <p className={styles.meta}>
          <span className={`${styles.chip} ${styles.up}`}>
            <FaArrowUp /> +2.4%
          </span>
          vs last month
        </p>
      </div>

      <div className={`${styles.card} ${styles.teal}`}>
        <div className={styles.top}>
          <div>
            <p className={styles.label}>Avg. Grade</p>
            <h3 className={styles.value}>B+</h3>
          </div>
          <div className={styles.iconBox}>
            <FaGraduationCap />
          </div>
        </div>
        <p className={styles.meta}>
          <span className={`${styles.chip} ${styles.up}`}>
            <FaArrowUp /> +1.1%
          </span>
          overall improvement
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.top}>
          <div>
            <p className={styles.label}>Active Students</p>
            <h3 className={styles.value}>1,390</h3>
          </div>
          <div className={styles.iconBox}>
            <HiOutlineUsers />
          </div>
        </div>
        <p className={styles.meta}>
          <span className={`${styles.chip} ${styles.down}`}>
            <FaArrowDown /> -0.6%
          </span>
          this week
        </p>
      </div>

      <div className={`${styles.card} ${styles.teal}`}>
        <div className={styles.top}>
          <div>
            <p className={styles.label}>Completion Rate</p>
            <h3 className={styles.value}>86%</h3>
          </div>
          <div className={styles.iconBox}>
            <MdShowChart />
          </div>
        </div>
        <p className={styles.meta}>
          <span className={`${styles.chip} ${styles.up}`}>
            <FaArrowUp /> +3.0%
          </span>
          term progress
        </p>
      </div>
    </section>
  );
};

export default StatsOverview;