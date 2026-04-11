import { Outlet } from "react-router-dom";
import Sidebar from "../../dashboard/Sidebar";
import Header from "../../dashboard/Header";
import styles from "./AdminLayout.module.css";


const AdminLayout = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />

      <div className={styles.mainContent}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;