import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./pages/login/Login";

import AdminLayout from "./components/layout/AdminLayout/AdminLayout";
import Dashboard from "./components/dashboard/Dashboard";
import Students from "./pages/students/Students";
import Teachers from "./pages/teachers/Teachers";
import Statistics from "./pages/statistics/Statistics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* NOTE: أي Route هنا جوه AdminLayout => محمي */}
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
}

export default App;