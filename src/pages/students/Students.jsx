import StudentsHeader from "./StudentsHeader";
import StudentsStats from "./StudentsStats";
import StudentsTable from "./StudentsTable";
import styles from "./Students.module.css";
import RecentActivityCard from "./RecentActivityCard";
import EnrollmentTrendCard from "./EnrollmentTrendCard";

const Students = () => {
  return (
    <div className={styles.page}>
      <StudentsHeader />
      <StudentsStats />
      <StudentsTable />
      <RecentActivityCard />
      <EnrollmentTrendCard />
    </div>
  );
};

export default Students;
