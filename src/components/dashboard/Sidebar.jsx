import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUserGraduate, FaChalkboardTeacher, FaChartBar } from "react-icons/fa";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `${styles.navItem} ${isActive ? styles.active : ""}`;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <h2 className={styles.logo}>MASTERY ACADEMY</h2>
      </div>

      <div className={styles.adminSection}>
        <div className={styles.avatar}>A</div>
        <div>
          <p className={styles.role}>ADMIN</p>
          <h3 className={styles.name}>Ali Hamada</h3>
        </div>
      </div>

      <div className={styles.navSection}>
        <p className={styles.navTitle}>MAIN NAVIGATION</p>

        <nav className={styles.navList}>
          <NavLink to="/dashboard" className={linkClass}>
            <MdDashboard className={styles.icon} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/teachers" className={linkClass}>
            <FaChalkboardTeacher className={styles.icon} />
            <span>Teachers</span>
          </NavLink>

          <NavLink to="/students" className={linkClass}>
            <FaUserGraduate className={styles.icon} />
            <span>Students</span>
          </NavLink>



          {/* <NavLink to="/statistics" className={linkClass}>
            <FaChartBar className={styles.icon} />
            <span>Statistics</span>
          </NavLink> */}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;