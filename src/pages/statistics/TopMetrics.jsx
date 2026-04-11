import styles from "./TopMetrics.module.css";

const TopMetrics = () => {
  const items = [
    { title: "Top Grade Level", value: "Grade 10", sub: "Highest average score" },
    { title: "Most Active Department", value: "Science", sub: "Best attendance" },
    { title: "At-Risk Students", value: "48", sub: "Need follow-up" },
    { title: "Scholarships", value: "19", sub: "Awarded this term" },
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