import { useState } from "react";
import StatsCards from "../../components/dashboard/StatsCards";
import RevenueSection from "../../components/dashboard/RevenueSection";
import EventsCard from "../../components/dashboard/EventsCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import Announcements from "../../components/dashboard/Announcements";
import QuickAccess from "../../components/dashboard/QuickAccess";
import AddEntityModal from "../../components/dashboard/AddEntityModal";
import { useSchoolData } from "../../context/SchoolDataContext";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [modalType, setModalType] = useState(null);
  const { addStudent, addTeacher } = useSchoolData();

  const handleModalClose = () => setModalType(null);

  const handleModalSubmit = (formData) => {
    if (modalType === "student") {
      addStudent(formData);
    } else if (modalType === "teacher") {
      addTeacher(formData);
    }
    handleModalClose();
  };

  return (
    <div className={styles.page}>
      <StatsCards />

      <div className={styles.middleSection}>
        <RevenueSection />
        <EventsCard />
      </div>

      <div className={styles.bottomSection}>
        <RecentActivity />
        <Announcements />
        <QuickAccess
          onAddTeacherClick={() => setModalType("teacher")}
          onAddStudentClick={() => setModalType("student")}
        />
      </div>

      {modalType ? (
        <AddEntityModal
          type={modalType}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
