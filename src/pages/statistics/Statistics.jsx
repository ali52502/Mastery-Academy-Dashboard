import StatsHeader from "./StatsHeader";
import StatsOverview from "./StatsOverview";
import PerformanceChart from "./PerformanceChart";
import TopMetrics from "./TopMetrics";
import styles from "./Statistics.module.css";

const Statistics = () => {
  return (
    <div className={styles.page}>
      <StatsHeader />
      <StatsOverview />

      <div className={styles.grid}>
        <PerformanceChart />
        <TopMetrics />
      </div>
    </div>
  );
};

export default Statistics;