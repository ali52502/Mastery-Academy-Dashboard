import { useMemo, useState } from "react";
import styles from "./AddEntityModal.module.css";

const studentDefaults = {
  name: "",
  grade: "",
  section: "",
  gender: "F",
  status: "Active",
  contact: "",
};

const teacherDefaults = {
  name: "",
  department: "",
  subject: "",
  hireDate: "",
  status: "Active",
  contact: "",
};

const AddEntityModal = ({ type, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(type === "student" ? studentDefaults : teacherDefaults);
  const isStudent = type === "student";

  const fields = useMemo(
    () =>
      isStudent
        ? [
            { id: "name", label: "Name", type: "text", required: true },
            { id: "grade", label: "Grade", type: "number", required: true },
            { id: "section", label: "Section", type: "text", required: true },
            { id: "gender", label: "Gender", type: "text", required: true },
            { id: "status", label: "Status", type: "text", required: true },
            { id: "contact", label: "Contact", type: "text", required: true },
          ]
        : [
            { id: "name", label: "Name", type: "text", required: true },
            { id: "department", label: "Department", type: "text", required: true },
            { id: "subject", label: "Subject", type: "text", required: true },
            { id: "hireDate", label: "Hire Date", type: "date", required: true },
            { id: "status", label: "Status", type: "text", required: true },
            { id: "contact", label: "Contact", type: "text", required: true },
          ],
    [isStudent]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.head}>
          <h3>{isStudent ? "Add New Student" : "Add New Teacher"}</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            x
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label key={field.id} className={styles.field}>
              <span>{field.label}</span>
              <input
                name={field.id}
                type={field.type}
                value={formData[field.id]}
                onChange={handleChange}
                required={field.required}
              />
            </label>
          ))}

          <div className={styles.actions}>
            <button type="button" className={styles.secondaryBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.primaryBtn}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntityModal;
