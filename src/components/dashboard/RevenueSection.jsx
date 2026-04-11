import styles from "./RevenueSection.module.css";

const RevenueSection = () => {
  return (
    <section className={styles.revenueCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>Revenue Overview</h2>
        <button className={styles.filterButton}>This Year</button>
      </div>

      <div className={styles.chartArea}>
        <div className={styles.yAxis}>
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        <div className={styles.chartContent}>
          <div className={styles.gridLines}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.fakeChart}></div>

          <div className={styles.xAxis}>
            <span>2019</span>
            <span>2020</span>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
            <span>2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;