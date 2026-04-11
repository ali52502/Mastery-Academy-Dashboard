import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import styles from "./StudentsTable.module.css";

const StudentsTable = () => {
  const [query, setQuery] = useState("");

  const students = useMemo(
    () => [
      { id: "S1021", name: "Emily Chen", grade: 8, section: "8A", gender: "F", status: "Active", contact: "(910)-4676" },
      { id: "S1022", name: "David Rodriguez", grade: 9, section: "9B", gender: "M", status: "Active", contact: "(910)-4676" },
      { id: "S1023", name: "Aisha Khan", grade: 7, section: "7A", gender: "F", status: "Active", contact: "(910)-4673" },
      { id: "S1024", name: "James Wilson", grade: 10, section: "10C", gender: "M", status: "On Leave", contact: "(910)-4676" },
      { id: "S1025", name: "Chloe Taylor", grade: 8, section: "8A", gender: "F", status: "Active", contact: "(910)-4676" },
      { id: "S1026", name: "Omar Hassan", grade: 11, section: "11B", gender: "M", status: "Pending", contact: "(910)-4021" },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return students;
    return students.filter(
      (s) =>
        s.id.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.section.toLowerCase().includes(q) ||
        s.status.toLowerCase().includes(q)
    );
  }, [query, students]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolsRow}>
        <div className={styles.searchBox}>
          <IoSearchOutline className={styles.searchIcon} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search students..."
          />
        </div>
      </div>

      <section className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div>
            <h2 className={styles.tableTitle}>Current Students List</h2>
            <p className={styles.tableSubtitle}>Showing {filtered.length} students</p>
          </div>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Grade</th>
                <th>Section</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((s) => (
                <tr key={s.id}>
                  <td className={styles.mono}>{s.id}</td>
                  <td className={styles.nameCell}>{s.name}</td>
                  <td>{s.grade}</td>
                  <td>{s.section}</td>
                  <td>{s.gender}</td>
                  <td>
                    <span
                      className={`${styles.status} ${
                        s.status === "Active"
                          ? styles.statusActive
                          : s.status === "On Leave"
                          ? styles.statusLeave
                          : styles.statusPending
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className={styles.mono}>{s.contact}</td>
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

export default StudentsTable;