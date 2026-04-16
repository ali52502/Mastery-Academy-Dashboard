import styles from "./TeacherSchedule.module.css";

const TeacherSchedule = () => {
  const items = [
    { name: "Alice Reed", tag: "Phys 10", variant: "cyan" },
    { name: "Benjamin Carter", tag: "Hist 9", variant: "purple" },
    { name: "Maya Patel", tag: "Arts 12", variant: "green" },
  ];

  const tagClass = (v) => {
    if (v === "cyan") return styles.cyan;
    if (v === "purple") return styles.purple;
    return styles.green;
  };

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Teacher Schedule</h2>

      <div className={styles.list}>
        {items.map((x) => (
          <div key={x.name} className={styles.row}>
            <span className={styles.name}>{x.name}</span>
            <span className={`${styles.tag} ${tagClass(x.variant)}`}>{x.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeacherSchedule;