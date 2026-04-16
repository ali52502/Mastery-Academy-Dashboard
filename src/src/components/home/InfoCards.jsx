import styles from "./InfoCards.module.css";

const InfoCards = () => {
  return (
    <section className={styles.cardsSection}>
      <div className={styles.card}>
        <h3>Students</h3>
        <p>
          A supportive learning environment with easy access to academy
          resources and updates.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Teachers</h3>
        <p>
          A modern space that helps instructors stay organized and connected
          with academic activities.
        </p>
      </div>

      <div className={styles.card}>
        <h3>Admin Dashboard</h3>
        <p>
          Powerful dashboard tools to manage students, teachers, records, and
          academy performance.
        </p>
      </div>
    </section>
  );
};

export default InfoCards;