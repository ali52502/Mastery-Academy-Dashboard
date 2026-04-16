import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEYS = {
  students: "school_students",
  teachers: "school_teachers",
  activity: "school_activity",
};

const seedStudents = [
  { id: "S1021", name: "Emily Chen", grade: 8, section: "8A", gender: "F", status: "Active", contact: "(910)-4676", addedAt: "2026-01-18T09:30:00.000Z" },
  { id: "S1022", name: "David Rodriguez", grade: 9, section: "9B", gender: "M", status: "Active", contact: "(910)-4676", addedAt: "2026-01-20T11:10:00.000Z" },
  { id: "S1023", name: "Aisha Khan", grade: 7, section: "7A", gender: "F", status: "Active", contact: "(910)-4673", addedAt: "2026-02-07T10:20:00.000Z" },
  { id: "S1024", name: "James Wilson", grade: 10, section: "10C", gender: "M", status: "On Leave", contact: "(910)-4676", addedAt: "2026-02-12T14:30:00.000Z" },
  { id: "S1025", name: "Chloe Taylor", grade: 8, section: "8A", gender: "F", status: "Active", contact: "(910)-4676", addedAt: "2026-03-01T08:40:00.000Z" },
  { id: "S1026", name: "Omar Hassan", grade: 11, section: "11B", gender: "M", status: "Pending", contact: "(910)-4021", addedAt: "2026-03-09T12:15:00.000Z" },
];

const seedTeachers = [
  { id: "T1001", name: "Alice Reed", department: "Science", subject: "Physics", hireDate: "2021-08-12", contact: "(910)-4676", status: "Active", addedAt: "2026-01-10T09:00:00.000Z" },
  { id: "T1002", name: "Benjamin Carter", department: "Humanities", subject: "History", hireDate: "2020-05-18", contact: "(910)-4676", status: "Active", addedAt: "2026-01-23T13:00:00.000Z" },
  { id: "T1003", name: "Maya Patel", department: "Arts", subject: "Fine Arts", hireDate: "2022-01-10", contact: "(910)-4676", status: "Active", addedAt: "2026-02-02T08:10:00.000Z" },
  { id: "T1004", name: "Noah Khan", department: "Physics", subject: "Physics", hireDate: "2019-09-03", contact: "(910)-4676", status: "On Leave", addedAt: "2026-02-18T10:10:00.000Z" },
  { id: "T1005", name: "Olivia Stone", department: "Science", subject: "Biology", hireDate: "2023-02-15", contact: "(910)-4788", status: "Active", addedAt: "2026-03-05T11:30:00.000Z" },
  { id: "T1006", name: "Daniel Lee", department: "Mathematics", subject: "Algebra", hireDate: "2021-11-27", contact: "(910)-4901", status: "Pending", addedAt: "2026-03-22T14:40:00.000Z" },
];

const seedActivity = [
  {
    id: "ACT-1",
    title: "New student admission completed",
    detail: "Emily Chen enrolled successfully.",
    createdAt: "2026-03-22T13:00:00.000Z",
  },
  {
    id: "ACT-2",
    title: "Teacher profile updated",
    detail: "Maya Patel details were edited.",
    createdAt: "2026-03-22T14:00:00.000Z",
  },
  {
    id: "ACT-3",
    title: "Data sync completed",
    detail: "Local records saved to storage.",
    createdAt: "2026-03-22T15:00:00.000Z",
  },
];

const SchoolDataContext = createContext(null);

const getSafeArray = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const saveArray = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

const getNextId = (prefix, items) => {
  const maxNumber = items.reduce((max, item) => {
    const parsed = Number.parseInt(String(item.id || "").replace(prefix, ""), 10);
    return Number.isNaN(parsed) ? max : Math.max(max, parsed);
  }, prefix === "S" ? 1020 : 1000);

  return `${prefix}${String(maxNumber + 1).padStart(4, "0")}`;
};

const formatTimeAgo = (isoString) => {
  const deltaMs = Date.now() - new Date(isoString).getTime();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (deltaMs < minute) return "just now";
  if (deltaMs < hour) return `${Math.floor(deltaMs / minute)} minutes ago`;
  if (deltaMs < day) return `${Math.floor(deltaMs / hour)} hours ago`;
  return `${Math.floor(deltaMs / day)} days ago`;
};

export const SchoolDataProvider = ({ children }) => {
  const [students, setStudents] = useState(() => getSafeArray(STORAGE_KEYS.students, seedStudents));
  const [teachers, setTeachers] = useState(() => getSafeArray(STORAGE_KEYS.teachers, seedTeachers));
  const [activity, setActivity] = useState(() => getSafeArray(STORAGE_KEYS.activity, seedActivity));

  useEffect(() => {
    saveArray(STORAGE_KEYS.students, students);
  }, [students]);

  useEffect(() => {
    saveArray(STORAGE_KEYS.teachers, teachers);
  }, [teachers]);

  useEffect(() => {
    saveArray(STORAGE_KEYS.activity, activity);
  }, [activity]);

  const addActivity = (title, detail) => {
    setActivity((prev) => [
      {
        id: `ACT-${Date.now()}`,
        title,
        detail,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ].slice(0, 20));
  };

  const addStudent = (studentInput) => {
    const newStudent = {
      id: getNextId("S", students),
      name: studentInput.name.trim(),
      grade: Number.parseInt(studentInput.grade, 10) || 1,
      section: studentInput.section.trim(),
      gender: studentInput.gender.trim() || "N/A",
      status: studentInput.status.trim() || "Pending",
      contact: studentInput.contact.trim() || "N/A",
      addedAt: new Date().toISOString(),
    };

    setStudents((prev) => [newStudent, ...prev]);
    addActivity("New student admission completed", `${newStudent.name} (${newStudent.id}) added.`);
    return newStudent;
  };

  const updateStudent = (studentId, updates) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? {
              ...student,
              ...updates,
            }
          : student
      )
    );
    addActivity("Student record updated", `${studentId} was updated.`);
  };

  const deleteStudent = (studentId) => {
    const deleted = students.find((student) => student.id === studentId);
    setStudents((prev) => prev.filter((student) => student.id !== studentId));
    addActivity("Student removed", deleted ? `${deleted.name} (${studentId}) deleted.` : `${studentId} deleted.`);
  };

  const addTeacher = (teacherInput) => {
    const newTeacher = {
      id: getNextId("T", teachers),
      name: teacherInput.name.trim(),
      department: teacherInput.department.trim(),
      subject: teacherInput.subject.trim(),
      hireDate: teacherInput.hireDate.trim(),
      contact: teacherInput.contact.trim() || "N/A",
      status: teacherInput.status.trim() || "Pending",
      addedAt: new Date().toISOString(),
    };

    setTeachers((prev) => [newTeacher, ...prev]);
    addActivity("Teacher added", `${newTeacher.name} (${newTeacher.id}) added.`);
    return newTeacher;
  };

  const updateTeacher = (teacherId, updates) => {
    setTeachers((prev) =>
      prev.map((teacher) =>
        teacher.id === teacherId
          ? {
              ...teacher,
              ...updates,
            }
          : teacher
      )
    );
    addActivity("Teacher profile updated", `${teacherId} was updated.`);
  };

  const deleteTeacher = (teacherId) => {
    const deleted = teachers.find((teacher) => teacher.id === teacherId);
    setTeachers((prev) => prev.filter((teacher) => teacher.id !== teacherId));
    addActivity("Teacher removed", deleted ? `${deleted.name} (${teacherId}) deleted.` : `${teacherId} deleted.`);
  };

  const value = useMemo(
    () => ({
      students,
      teachers,
      activity,
      addStudent,
      updateStudent,
      deleteStudent,
      addTeacher,
      updateTeacher,
      deleteTeacher,
      formatTimeAgo,
    }),
    [students, teachers, activity]
  );

  return <SchoolDataContext.Provider value={value}>{children}</SchoolDataContext.Provider>;
};

export const useSchoolData = () => {
  const context = useContext(SchoolDataContext);
  if (!context) {
    throw new Error("useSchoolData must be used inside SchoolDataProvider");
  }
  return context;
};
