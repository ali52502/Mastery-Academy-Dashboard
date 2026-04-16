import styles from "./TopMetrics.module.css";
import { useSchoolData } from "../../context/SchoolDataContext";

const TopMetrics = () => {
  const { students, teachers } = useSchoolData();

  const gradeCounts = students.reduce((acc, student) => {
    const key = `Grade ${student.grade}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const topGradeLevel =
    Object.entries(gradeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  const departmentCounts = teachers
    .filter((teacher) => teacher.status === "Active")
    .reduce((acc, teacher) => {
      const key = teacher.department || "Unassigned";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

  const mostActiveDepartment =
    Object.entries(departmentCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  const atRiskStudents = students.filter(
    (student) => student.status === "Pending" || student.status === "On Leave"
  ).length;
  const scholarships = Math.max(0, Math.round(students.length * 0.12));

  const items = [
    { title: "Top Grade Level", value: topGradeLevel, sub: "Most enrolled level" },
    { title: "Most Active Department", value: mostActiveDepartment, sub: "Highest active teachers" },
    { title: "At-Risk Students", value: atRiskStudents.toLocaleString(), sub: "Pending or on leave" },
    { title: "Scholarships", value: scholarships.toLocaleString(), sub: "Estimated this term" },
  ];

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Top Metrics</h2>

      <div className={styles.list}>
        {items.map((x) => (
          <div key={x.title} className={styles.item}>
            <div>
              <h4 className={styles.itemTitle}>{x.title}</h4>
              <p className={styles.itemSub}>{x.sub}</p>
            </div>
            <div className={styles.value}>{x.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopMetrics;
