import { Outlet, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../../dashboard/Sidebar";
import Header from "../../dashboard/Header";
import styles from "./AdminLayout.module.css";

const AdminLayout = () => {
  const location = useLocation();

  // NOTE: نقرأ sessionStorage
  const authUser = sessionStorage.getItem("auth_user");

  // NOTE: لو مش مسجل دخول => رجّعه للـ login
  // NOTE: (state) بتخزن المكان اللي كان رايح له عشان ممكن نرجعه بعدين (اختياري)
  if (!authUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // NOTE: لو مسجل دخول => اعرض layout الطبيعي
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