import styles from "./StudentsHeader.module.css";

const StudentsHeader = () => {
  return (
    <div className={styles.pageHeader}>
      <h1 className={styles.title}>Student Directory</h1>
      <p className={styles.subtitle}>Manage all enrolled students in one place.</p>
    </div>
  );
};

export default StudentsHeader;