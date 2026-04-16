import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useSchoolData } from "../../context/SchoolDataContext";
import styles from "./StudentsTable.module.css";

const StudentsTable = () => {
  const [query, setQuery] = useState("");
  const { students, updateStudent, deleteStudent } = useSchoolData();

  const handleDelete = (studentId) => {
    const shouldDelete = window.confirm("Delete this student?");
    if (!shouldDelete) return;

    deleteStudent(studentId);
  };

  const handleEdit = (student) => {
    const name = window.prompt("Edit student name:", student.name);
    if (name === null) return;

    const gradeInput = window.prompt("Edit grade:", String(student.grade));
    if (gradeInput === null) return;

    const section = window.prompt("Edit section:", student.section);
    if (section === null) return;

    const gender = window.prompt("Edit gender:", student.gender);
    if (gender === null) return;

    const status = window.prompt("Edit status (Active, On Leave, Pending):", student.status);
    if (status === null) return;

    const contact = window.prompt("Edit contact:", student.contact);
    if (contact === null) return;

    const parsedGrade = Number.parseInt(gradeInput, 10);

    updateStudent(student.id, {
      name: name.trim() || student.name,
      grade: Number.isNaN(parsedGrade) ? student.grade : parsedGrade,
      section: section.trim() || student.section,
      gender: gender.trim() || student.gender,
      status: status.trim() || student.status,
      contact: contact.trim() || student.contact,
    });
  };

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
                      <button
                        className={styles.actionBtn}
                        title="Edit"
                        onClick={() => handleEdit(s)}
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        className={styles.actionBtn}
                        title="Delete"
                        onClick={() => handleDelete(s.id)}
                      >
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
