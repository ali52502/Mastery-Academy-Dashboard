import styles from "./RecentActivity.module.css";

const RecentActivity = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Recent Activity</h2>

      <div className={styles.list}>
        <div className={styles.item}>
          <h4>New student admission completed</h4>
          <p>2 minutes ago</p>
        </div>

        <div className={styles.item}>
          <h4>Teacher profile updated successfully</h4>
          <p>15 minutes ago</p>
        </div>

        <div className={styles.item}>
          <h4>Monthly revenue report generated</h4>
          <p>1 hour ago</p>
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;