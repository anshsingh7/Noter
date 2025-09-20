import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/DashboardLayout";
import NotesPage from "./components/pages/Notes";
import Tasks from "./components/pages/Tasks";
import SetingsPage from "./components/pages/settings/SettingsPage";
import NewNotePage from "./components/sub_pages/AddNotes";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/notes/new" element={<NewNotePage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<SetingsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;



// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";
// import StatCard from "./components/StatCard";
// import CardContainer from "./components/CardContainer";
// import NoteCard from "./components/NoteCard";
// import TaskCard from "./components/TaskCard";

// const App = () => {
//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col min-h-screen">
//         {/* Topbar */}
//         <Topbar />

//         {/* Dashboard Content */}
//         <main className="flex-1 p-6 bg-gray-50">
//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <StatCard type="notes" title="Total Notes" value="12" />
//             <StatCard type="tasks" title="Active Tasks" value="5" />
//             <StatCard type="productivity" title="Productivity" value="85%" />
//           </div>

//           {/* Notes + Tasks */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Notes */}
//             <CardContainer
//               title="Recent Notes"
//               action={{ label: "Add Note", onClick: () => console.log("Add Note") }}
//             >
//               <NoteCard
//                 title="Product Roadmap 2024"
//                 description="Key features and milestones for the upcoming year..."
//                 tags={["planning", "product"]}
//                 onEdit={() => console.log("Edit Note")}
//                 onDelete={() => console.log("Delete Note")}
//               />
//               <NoteCard
//                 title="Meeting Summary"
//                 description="Decisions from the strategy meeting"
//                 tags={["meeting"]}
//                 onEdit={() => console.log("Edit Note")}
//                 onDelete={() => console.log("Delete Note")}
//               />
//             </CardContainer>

//             {/* Tasks */}
//             <CardContainer
//               title="Urgent Tasks"
//               action={{ label: "Add Task", onClick: () => console.log("Add Task") }}
//             >
//               <TaskCard
//                 task="Review API documentation"
//                 priority="high"
//                 deadline="Today"
//                 onEdit={() => console.log("Edit Task")}
//                 onDelete={() => console.log("Delete Task")}
//               />
//               <TaskCard
//                 task="Finalize UI design"
//                 priority="medium"
//                 deadline="Tomorrow"
//                 onEdit={() => console.log("Edit Task")}
//                 onDelete={() => console.log("Delete Task")}
//               />
//             </CardContainer>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default App;
