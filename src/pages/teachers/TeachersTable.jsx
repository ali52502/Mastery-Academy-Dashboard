import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import styles from "./TeachersTable.module.css";

const TeachersTable = () => {
  const [query, setQuery] = useState("");

  const teachers = useMemo(
    () => [
      {
        id: "T1001",
        name: "Alice Reed",
        department: "Science",
        subject: "Physics",
        hireDate: "2021-08-12",
        contact: "(910)-4676",
        status: "Active",
      },
      {
        id: "T1002",
        name: "Benjamin Carter",
        department: "Humanities",
        subject: "History",
        hireDate: "2020-05-18",
        contact: "(910)-4676",
        status: "Active",
      },
      {
        id: "T1003",
        name: "Maya Patel",
        department: "Arts",
        subject: "Fine Arts",
        hireDate: "2022-01-10",
        contact: "(910)-4676",
        status: "Active",
      },
      {
        id: "T1004",
        name: "Noah Khan",
        department: "Physics",
        subject: "Physics",
        hireDate: "2019-09-03",
        contact: "(910)-4676",
        status: "On Leave",
      },
      {
        id: "T1005",
        name: "Olivia Stone",
        department: "Science",
        subject: "Biology",
        hireDate: "2023-02-15",
        contact: "(910)-4788",
        status: "Active",
      },
      {
        id: "T1006",
        name: "Daniel Lee",
        department: "Mathematics",
        subject: "Algebra",
        hireDate: "2021-11-27",
        contact: "(910)-4901",
        status: "Pending",
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return teachers;

    return teachers.filter(
      (t) =>
        t.id.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q) ||
        t.department.toLowerCase().includes(q) ||
        t.subject.toLowerCase().includes(q) ||
        t.status.toLowerCase().includes(q)
    );
  }, [query, teachers]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Active":
        return styles.statusActive;
      case "On Leave":
        return styles.statusLeave;
      case "Pending":
        return styles.statusPending;
      default:
        return "";
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolsRow}>
        <div className={styles.searchBox}>
          <IoSearchOutline className={styles.searchIcon} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search teachers..."
          />
        </div>
      </div>

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2 className={styles.tableTitle}>Current Faculty List</h2>
            <p className={styles.tableSubtitle}>
              Showing {filtered.length} teachers
            </p>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Teacher ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Subject</th>
                <th>Hire Date</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((t) => (
                <tr key={t.id}>
                  <td className={styles.mono}>{t.id}</td>
                  <td className={styles.nameCell}>{t.name}</td>
                  <td>{t.department}</td>
                  <td>{t.subject}</td>
                  <td className={styles.mono}>{t.hireDate}</td>
                  <td className={styles.mono}>{t.contact}</td>
                  <td>
                    <span className={`${styles.status} ${getStatusClass(t.status)}`}>
                      {t.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.actionBtn} title="View">
                        <FiEye />
                      </button>
                      <button className={styles.actionBtn} title="Edit">
                        <FiEdit2 />
                      </button>
                      <button className={styles.actionBtn} title="Delete">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TeachersTable;