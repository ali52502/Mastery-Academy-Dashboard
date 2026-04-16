import styles from "./EnrollmentTrendCard.module.css";
import { useSchoolData } from "../../context/SchoolDataContext";

const EnrollmentTrendCard = () => {
  const { students } = useSchoolData();
  const gradeCounts = students.reduce((acc, student) => {
    const gradeKey = String(student.grade ?? "N/A");
    acc[gradeKey] = (acc[gradeKey] || 0) + 1;
    return acc;
  }, {});

  const gradeLabels = Object.keys(gradeCounts).sort((a, b) => Number(a) - Number(b));
  const counts = gradeLabels.map((label) => gradeCounts[label]);
  const maxValue = Math.max(...counts, 1);
  const yTicks = [
    maxValue,
    Math.round(maxValue * 0.75),
    Math.round(maxValue * 0.5),
    Math.round(maxValue * 0.25),
    0,
  ];

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Students by Grade</h2>

      <div className={styles.chart}>
        <div className={styles.yAxis}>
          {yTicks.map((tick, index) => (
            <span key={index}>{tick}</span>
          ))}
        </div>

        <div className={styles.canvas}>
          <div className={styles.gridLines}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className={styles.bars}>
            {gradeLabels.map((label, index) => {
              const value = counts[index];
              const heightPercent = Math.max((value / maxValue) * 100, 8);

              return (
                <div key={label} className={styles.barColumn}>
                  <div className={styles.barValue}>{value}</div>
                  <div className={styles.bar} style={{ height: `${heightPercent}%` }} />
                  <div className={styles.barLabel}>G{label}</div>
                </div>
              );
            })}
          </div>

          <div className={styles.xAxis}>
            <span>Grade Distribution from Stored Students Data</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentTrendCard;
