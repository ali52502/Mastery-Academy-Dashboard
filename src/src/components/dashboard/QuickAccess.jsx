import styles from "./QuickAccess.module.css";

const QuickAccess = ({ onAddTeacherClick, onAddStudentClick }) => {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Quick Access</h2>

      <div className={styles.actions}>
        <button className={styles.actionButton} onClick={onAddTeacherClick}>+ Add Teacher</button>
        <button className={styles.actionButton} onClick={onAddStudentClick}>+ New Student</button>
        <button className={styles.actionButton}>View Reports</button>
        <button className={styles.actionButton}>Manage Classes</button>
      </div>
    </section>
  );
};

export default QuickAccess;
