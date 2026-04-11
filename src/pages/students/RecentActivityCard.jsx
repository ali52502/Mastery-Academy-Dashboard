import styles from "./RecentActivityCard.module.css";

const RecentActivityCard = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Recent Activity</h2>

      <div className={styles.list}>
        <div className={styles.item}>
          <h4 className={styles.itemTitle}>Emily Chen enrolled</h4>
          <p className={styles.itemText}>New admission completed successfully.</p>
        </div>

        <div className={styles.item}>
          <h4 className={styles.itemTitle}>Leave request approved</h4>
          <p className={styles.itemText}>James Wilson marked as On Leave.</p>
        </div>

        <div className={styles.item}>
          <h4 className={styles.itemTitle}>Student record updated</h4>
          <p className={styles.itemText}>Aisha Khan profile details updated.</p>
        </div>
      </div>
    </section>
  );
};

export default RecentActivityCard;