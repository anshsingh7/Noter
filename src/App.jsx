import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ProfilePage from "./components/pages/ProfilePage";
import Dashboard from "./components/sub_components/dashboard/DashboardPage";
import NotesPage from "./components/sub_components/notes/NotesPage";
import TaskPage from "./components/sub_components/tasks/TasksPage";
import SettingsPage from "./components/sub_components/settings/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

