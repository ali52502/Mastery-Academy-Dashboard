import styles from "./EnrollmentTrendCard.module.css";

const EnrollmentTrendCard = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Enrollment Trend</h2>

      <div className={styles.chart}>
        <div className={styles.yAxis}>
          <span>280</span>
          <span>210</span>
          <span>140</span>
          <span>70</span>
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
              className={styles.line}
              d="M 10 170
                 C 55 120, 75 120, 95 110
                 C 140 95, 160 130, 190 125
                 C 230 120, 250 75, 285 85
                 C 320 95, 340 45, 370 55
                 C 405 65, 420 25, 450 35
                 C 480 45, 495 20, 510 10"
            />
            <circle className={styles.dot} cx="10" cy="170" r="4" />
            <circle className={styles.dot} cx="95" cy="110" r="4" />
            <circle className={styles.dot} cx="190" cy="125" r="4" />
            <circle className={styles.dot} cx="285" cy="85" r="4" />
            <circle className={styles.dot} cx="370" cy="55" r="4" />
            <circle className={styles.dot} cx="450" cy="35" r="4" />
            <circle className={styles.dot} cx="510" cy="10" r="4" />
          </svg>

          <div className={styles.xAxis}>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentTrendCard;