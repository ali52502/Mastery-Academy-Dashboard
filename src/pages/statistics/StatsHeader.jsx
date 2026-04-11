import styles from "./StatsHeader.module.css";

const StatsHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Statistics</h1>
      <p className={styles.subtitle}>
        Track academy performance, progress, and key metrics.
      </p>
    </div>
  );
};

export default StatsHeader;