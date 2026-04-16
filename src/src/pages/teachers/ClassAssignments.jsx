import styles from "./ClassAssignments.module.css";

const ClassAssignments = () => {
  const items = [
    { name: "Alice Reed", info: "Physics 10" },
    { name: "Benjamin Carter", info: "History 9" },
    { name: "Maya Patel", info: "Fine Arts 12" },
  ];

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Class Assignments</h2>

      <div className={styles.list}>
        {items.map((x) => (
          <div key={x.name} className={styles.item}>
            <h4 className={styles.name}>{x.name}</h4>
            <p className={styles.sub}>{x.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassAssignments;