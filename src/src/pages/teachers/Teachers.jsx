import TeachersStats from "./TeachersStats";
import TeachersTable from "./TeachersTable";
import ClassAssignments from "./ClassAssignments";
import TeacherSchedule from "./TeacherSchedule";
import styles from "./Teachers.module.css";

const Teachers = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Teacher Directory</h1>
        <p className={styles.subtitle}>
          Manage faculty members, departments, and assignments.
        </p>
      </div>

      <TeachersStats />
      <TeachersTable />

      <div className={styles.bottomStack}>
        <ClassAssignments />
        <TeacherSchedule />
      </div>
    </div>
  );
};

export default Teachers;