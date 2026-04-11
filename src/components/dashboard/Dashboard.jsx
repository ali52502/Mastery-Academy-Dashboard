import StatsCards from "../../components/dashboard/StatsCards";
import RevenueSection from "../../components/dashboard/RevenueSection";
import EventsCard from "../../components/dashboard/EventsCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import Announcements from "../../components/dashboard/Announcements";
import QuickAccess from "../../components/dashboard/QuickAccess";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
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
        <QuickAccess />
      </div>
    </div>
  );
};

export default Dashboard;