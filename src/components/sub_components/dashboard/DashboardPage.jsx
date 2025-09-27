import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTaskComplete } from "../../../redux/reduce/taskSlice";
import Layout from "../../layout/MainLayout";
import StatCard from "./StatCard";
import NoteCard from "./NoteCard";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.tasks);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleTaskComplete = (id) => {
    dispatch(toggleTaskComplete(id));
  };

  return (
    <Layout
      meta={{
        title: "Dashboard - NOTER AI",
        description: "",
        keywords: ["dashboard, notes, tasks, productivity"],
      }}> 

      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-600 mb-6">
        Welcome back! Here's what's happening today.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard type="notes" title="Total Notes" value="24" change="+12%" />
        <StatCard type="tasks" title="Active Tasks" value="8" change="+3%" />
        <StatCard type="tasks" title="Completed Today" value="5" change="+25%" />
        <StatCard type="productivity" title="Productivity" value="87%" change="+5%" />
      </div>

      {/* Notes & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Notes */}
        <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Notes</h2>
            <Link
              to="/notes"
              className="text-purple-600 text-sm hover:underline"
            >
              View All
            </Link>
            </div>
          <div className="space-y-4">
            <NoteCard
              title="Product Roadmap 2024"
              description="Key features and milestones for the upcoming year..."
              tags={["planning", "product"]}
              time="2 hours ago"
            />
            <NoteCard
              title="Meeting Notes - Team Sync"
              description="Discussion about new feature implementations..."
              tags={["meeting", "development"]}
              time="4 hours ago"
            />
          </div>
        </div>

        {/* Urgent Tasks */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Urgent Tasks</h2>
            <Link
              to="/tasks"
              className="text-purple-600 text-sm hover:underline"
            >
              View Board
            </Link>
          </div>
          <TaskCard tasks={taskList} onComplete={handleTaskComplete} />
        </div>
      </div>
    </Layout>
  );
}

// import { useDispatch, useSelector } from "react-redux";
// import { deleteTask } from "../../../redux/reduce/taskSlice";
// import Layout from "../../layout/MainLayout";
// import StatCard from "./StatCard";
// import NoteCard from "./NoteCard";
// import TaskCard from "./TaskCard";
// import { Link } from "react-router-dom";

// export default function Dashboard() {
//   const dispatch = useDispatch();
//   const taskList = useSelector((state) => state.tasks.tasks);

//   const handleDeleteTask = (id) => {
//     dispatch(deleteTask(id)); // ✅ Update redux store
//   };

//   return (
//     <Layout
//       meta={{
//         title: "Dashboard - NOTER AI",
//         description: "",
//         keywords: ["dashboard, notes, tasks, productivity"],
//       }}
//     >
//       <h1 className="text-2xl font-bold">Dashboard</h1>
//       <p className="text-gray-600 mb-6">
//         Welcome back! Here's what's happening today.
//       </p>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//         <StatCard type="notes" title="Total Notes" value="24" change="+12%" />
//         <StatCard type="tasks" title="Active Tasks" value="8" change="+3%" />
//         <StatCard type="tasks" title="Completed Today" value="5" change="+25%" />
//         <StatCard type="productivity" title="Productivity" value="87%" change="+5%" />
//       </div>

//       {/* Notes & Tasks */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Recent Notes */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Recent Notes</h2>
//             <Link
//               to="/notes"
//               className="text-purple-600 text-sm hover:underline"
//             >
//               View All
//             </Link>
//           </div>

//           <div className="space-y-4">
//             <NoteCard
//               title="Product Roadmap 2024"
//               description="Key features and milestones for the upcoming year..."
//               tags={["planning", "product"]}
//               time="2 hours ago"
//             />
//             <NoteCard
//               title="Meeting Notes - Team Sync"
//               description="Discussion about new feature implementations..."
//               tags={["meeting", "development"]}
//               time="4 hours ago"
//             />
//           </div>
//         </div>

//         {/* Urgent Tasks */}
//         <div className="bg-white rounded-xl shadow p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-lg font-semibold">Urgent Tasks</h2>
//             <Link
//               to="/tasks"
//               className="text-purple-600 text-sm hover:underline"
//             >
//               View Board
//             </Link>
//           </div>

//           <div className="space-y-3">
//             <TaskCard tasks={taskList} onDelete={handleDeleteTask} />
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }