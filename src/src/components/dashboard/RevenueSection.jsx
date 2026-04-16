import styles from "./RevenueSection.module.css";
import { useSchoolData } from "../../context/SchoolDataContext";

const RevenueSection = () => {
  const { students } = useSchoolData();
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, i) => currentYear - 6 + i);

  const revenueByYear = years.map((year) => {
    const admissions = students.filter((student) => {
      const date = new Date(student.addedAt || Date.now());
      return date.getFullYear() === year;
    }).length;
    return admissions * 280;
  });

  const maxRevenue = Math.max(...revenueByYear, 1);
  const normalizedHeight = (value) => Math.round((value / maxRevenue) * 100);
  const chartPolygon = `${revenueByYear
    .map((value, index) => `${(index / (revenueByYear.length - 1)) * 100}% ${100 - normalizedHeight(value)}%`)
    .join(", ")}, 100% 100%, 0% 100%`;

  return (
    <section className={styles.revenueCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>Revenue Overview</h2>
        <button className={styles.filterButton}>This Year</button>
      </div>

      <div className={styles.chartArea}>
        <div className={styles.yAxis}>
          <span>{Math.round(maxRevenue)}</span>
          <span>{Math.round(maxRevenue * 0.75)}</span>
          <span>{Math.round(maxRevenue * 0.5)}</span>
          <span>{Math.round(maxRevenue * 0.25)}</span>
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

          <div
            className={styles.fakeChart}
            style={{
              clipPath: `polygon(${chartPolygon})`,
            }}
          ></div>

          <div className={styles.xAxis}>
            {years.map((year) => (
              <span key={year}>{year}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
