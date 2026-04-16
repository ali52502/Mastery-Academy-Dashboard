import styles from "./RecentActivityCard.module.css";
import { useSchoolData } from "../../context/SchoolDataContext";

const RecentActivityCard = () => {
  const { activity } = useSchoolData();
  const latest = activity.slice(0, 3);

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Recent Activity</h2>

      <div className={styles.list}>
        {latest.map((item) => (
          <div key={item.id} className={styles.item}>
            <h4 className={styles.itemTitle}>{item.title}</h4>
            <p className={styles.itemText}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivityCard;
