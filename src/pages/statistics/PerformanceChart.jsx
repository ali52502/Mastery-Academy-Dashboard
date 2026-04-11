import styles from "./PerformanceChart.module.css";

const PerformanceChart = () => {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>Performance Overview</h2>
        <button className={styles.filter}>This Term</button>
      </div>

      <div className={styles.chart}>
        <div className={styles.yAxis}>
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        <div className={styles.canvas}>
          <div className={styles.gridLines}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <svg className={styles.svg} viewBox="0 0 520 220" preserveAspectRatio="none">
            <path
              className={styles.area}
              d="M 10 160
                 C 80 120, 120 130, 160 105
                 C 220 70, 250 92, 290 80
                 C 330 70, 360 50, 400 70
                 C 440 95, 470 40, 510 28
                 L 510 210 L 10 210 Z"
            />
            <path
              className={styles.line}
              d="M 10 160
                 C 80 120, 120 130, 160 105
                 C 220 70, 250 92, 290 80
                 C 330 70, 360 50, 400 70
                 C 440 95, 470 40, 510 28"
            />
          </svg>

          <div className={styles.xAxis}>
            <span>W1</span>
            <span>W2</span>
            <span>W3</span>
            <span>W4</span>
            <span>W5</span>
            <span>W6</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceChart;