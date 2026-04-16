import {
  IoNotificationsOutline,
  IoSettingsOutline,
  IoSearchOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // NOTE: مسح بيانات الدخول
    sessionStorage.removeItem("auth_user");

    // NOTE: رجوع لصفحة login
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <div className={styles.welcomeBox}>
        <h1 className={styles.title}>Welcome back, Ali Hamada</h1>
        <p className={styles.subtitle}>
          Here&apos;s what&apos;s happening across Mastery Academy today.
        </p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.searchBox}>
          <IoSearchOutline className={styles.searchIcon} />
          <input type="text" placeholder="Search..." />
        </div>


        {/* NOTE: زر Logout */}
        <button
          className={styles.iconButton}
          type="button"
          title="Logout"
          onClick={handleLogout}
        >
          <IoLogOutOutline />
        </button>

        <div className={styles.profileCard}>
          <div className={styles.profileInfo}>
            <span className={styles.profileRole}>ADMIN</span>
            <h3 className={styles.profileName}>Ali Hamada</h3>
          </div>

          <div className={styles.profileAvatar}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;