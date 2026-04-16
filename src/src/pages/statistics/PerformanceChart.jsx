import styles from "./PerformanceChart.module.css";
import { useSchoolData } from "../../context/SchoolDataContext";

const PerformanceChart = () => {
  const { students } = useSchoolData();
  const pointsCount = 6;
  const now = new Date();
  const months = Array.from({ length: pointsCount }, (_, i) => {
    const date = new Date(now.getFullYear(), now.getMonth() - (pointsCount - 1 - i), 1);
    return date;
  });

  const values = months.map((date) => {
    const monthStudents = students.filter((student) => {
      const added = new Date(student.addedAt || Date.now());
      return added.getMonth() === date.getMonth() && added.getFullYear() === date.getFullYear();
    });
    const active = monthStudents.filter((student) => student.status === "Active").length;
    if (!monthStudents.length) return 20;
    return Math.round((active / monthStudents.length) * 100);
  });

  const maxValue = 100;
  const width = 520;
  const height = 220;
  const points = values.map((value, index) => {
    const x = 10 + (index * (width - 20)) / (values.length - 1);
    const y = 10 + (1 - value / maxValue) * (height - 20);
    return { x, y };
  });

  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} 210 L ${points[0].x} 210 Z`;
  const xLabels = months.map((date) => date.toLocaleString("en-US", { month: "short" }));

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
            <path className={styles.area} d={areaPath} />
            <path className={styles.line} d={linePath} />
          </svg>

          <div className={styles.xAxis}>
            {xLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceChart;
