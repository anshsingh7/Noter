import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import StatCard from "../StatCard";
import NoteCard from "../NoteCard";
import TaskCard from "../TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/reduce/taskSlice";

export default function Dashboard() {
   const dispatch = useDispatch();
  const taskList = useSelector((state)=>state.tasks.tasks)

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id)); // ✅ Update redux store
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar />
        
      <main className="flex-1 p-6 bg-gray-50">

        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome back! Here's what's happening today.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Notes" value="24" change="+12%" />
          <StatCard title="Active Tasks" value="8" change="+3%" />
          <StatCard title="Completed Today" value="5" change="+25%" />
          <StatCard title="Productivity" value="87%" change="+5%" />
        </div>

        {/* Notes & Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Notes */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Notes</h2>
              <a href="/notes" className="text-purple-600 text-sm hover:underline">
                View All
              </a>
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
              <a href="/tasks" className="text-purple-600 text-sm hover:underline">
                View Board
              </a>
            </div>

            <div className="space-y-3">

              <TaskCard tasks={taskList} onDelete={handleDeleteTask}/>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
