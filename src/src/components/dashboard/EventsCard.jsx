import styles from "./EventsCard.module.css";

const EventsCard = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section className={styles.eventsCard}>
      <h2 className={styles.title}>Upcoming Events</h2>

      <div className={styles.daysRow}>
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className={styles.datesGrid}>
        {dates.map((date) => (
          <div
            key={date}
            className={`${styles.dateItem} ${date === 12 ? styles.active : ""}`}
          >
            {date}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsCard;