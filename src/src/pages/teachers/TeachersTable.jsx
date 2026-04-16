import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import { useSchoolData } from "../../context/SchoolDataContext";
import styles from "./TeachersTable.module.css";

const TeachersTable = () => {
  const [query, setQuery] = useState("");
  const { teachers, updateTeacher, deleteTeacher } = useSchoolData();

  const handleDelete = (teacherId) => {
    const shouldDelete = window.confirm("Delete this teacher?");
    if (!shouldDelete) return;

    deleteTeacher(teacherId);
  };

  const handleEdit = (teacher) => {
    const name = window.prompt("Edit teacher name:", teacher.name);
    if (name === null) return;

    const department = window.prompt("Edit department:", teacher.department);
    if (department === null) return;

    const subject = window.prompt("Edit subject:", teacher.subject);
    if (subject === null) return;

    const hireDate = window.prompt("Edit hire date (YYYY-MM-DD):", teacher.hireDate);
    if (hireDate === null) return;

    const contact = window.prompt("Edit contact:", teacher.contact);
    if (contact === null) return;

    const status = window.prompt("Edit status (Active, On Leave, Pending):", teacher.status);
    if (status === null) return;

    updateTeacher(teacher.id, {
      name: name.trim() || teacher.name,
      department: department.trim() || teacher.department,
      subject: subject.trim() || teacher.subject,
      hireDate: hireDate.trim() || teacher.hireDate,
      contact: contact.trim() || teacher.contact,
      status: status.trim() || teacher.status,
    });
  };

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
                      <button
                        className={styles.actionBtn}
                        title="Edit"
                        onClick={() => handleEdit(t)}
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        className={styles.actionBtn}
                        title="Delete"
                        onClick={() => handleDelete(t.id)}
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

export default TeachersTable;
