import styles from "./RecentActivity.module.css";
import { useSchoolData } from "../../context/SchoolDataContext";

const RecentActivity = () => {
  const { activity, formatTimeAgo } = useSchoolData();
  const latest = activity.slice(0, 3);

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Recent Activity</h2>

      <div className={styles.list}>
        {latest.map((item) => (
          <div key={item.id} className={styles.item}>
            <h4>{item.title}</h4>
            <p>{formatTimeAgo(item.createdAt)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;
