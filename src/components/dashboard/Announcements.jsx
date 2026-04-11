import styles from "./Announcements.module.css";

const Announcements = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Announcements</h2>

      <div className={styles.list}>
        <div className={styles.item}>
          <h4>School event scheduled for next week</h4>
          <p>Administration notice</p>
        </div>

        <div className={styles.item}>
          <h4>New academic materials uploaded</h4>
          <p>Available for review</p>
        </div>

        <div className={styles.item}>
          <h4>Attendance review deadline approaching</h4>
          <p>Please complete updates today</p>
        </div>
      </div>
    </section>
  );
};

export default Announcements;