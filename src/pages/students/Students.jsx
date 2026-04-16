import StudentsHeader from "./StudentsHeader";
import StudentsStats from "./StudentsStats";
import StudentsTable from "./StudentsTable";
import styles from "./Students.module.css";
import RecentActivityCard from "./RecentActivityCard";
import EnrollmentTrendCard from "./EnrollmentTrendCard";

const Students = () => {
  return (
    <div className={styles.page}>
      <StudentsHeader />
      <StudentsStats />
      <StudentsTable />
      <RecentActivityCard />
      <EnrollmentTrendCard />
    </div>
  );
};

export default Students;

// session stotage : login and store the user data in session storage and check if the user is logged in before rendering the dashboard and other protected routes. If the user is not logged in, redirect them to the login page.
// logout

// 1. Create a logout function that clears the session storage and redirects the user to the login page.

// local storage : CRUD add data to local storage and retrieve it when needed. For example, you can store user preferences or settings in local storage and retrieve them when the user visits the dashboard again.
// localstorage : update - delete - read - create daata
// add teacher and students

// get total number from real stored data
