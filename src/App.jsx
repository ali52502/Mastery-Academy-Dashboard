import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./pages/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import AdminLayout from "./components/layout/AdminLayout/AdminLayout";

import Students from "./pages/students/Students";
import Teachers from "./pages/teachers/Teachers";
import Statistics from "./pages/statistics/Statistics";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/statistics" element={<Statistics />} />              
      </Route>
      
    </Routes>
      <Footer />

    </>
  );
}

export default App;