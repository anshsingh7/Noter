import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";
import { Plus } from "lucide-react";
import CardContainer from "../sub_pages/CardContainer";
import TaskModal from "../sub_pages/TaskModal";
import { addTask,deleteTask } from "../../redux/reduce/taskSlice";
import TaskCard from "../sub_pages/TaskCard";

const TaskPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("Tasks from Redux:", searchQuery);

  const filteredTasks = tasks.filter(
    (task) =>
      task.task?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.priority?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.status?.toLowerCase().includes(searchQuery.toLowerCase())||
      task.deadline?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTask = (task) => {
    dispatch(addTask(task)); // ✅ Update redux store
    setIsModalOpen(false);
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id)); // ✅ Update redux store
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />

        <div className="p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Tasks</h1>
              <p className="text-gray-500">Manage your daily to-dos</p>
            </div>
            <button
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={18} /> New Task
            </button>
          </div>

          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border rounded-lg mb-6"
          />

          <TaskCard tasks={filteredTasks} onDelete={handleDeleteTask}/>
        </div>
      </div>

      {isModalOpen && (
        <TaskModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddTask}
        />
      )}
    </div>
  );
};

export default TaskPage;