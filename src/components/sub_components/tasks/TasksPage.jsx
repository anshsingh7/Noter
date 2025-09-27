import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plus } from "lucide-react";
import TaskCard from "../dashboard/TaskCard";
import { addTask, deleteTask } from "../../../redux/reduce/taskSlice";
import Layout from "../../layout/MainLayout";
import TaskModal from "../../modal/TaskModal";

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
    console.log("Adding Task:", task);
    dispatch(addTask(task)); // ✅ Update redux store
    setIsModalOpen(false);
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id)); // ✅ Update redux store
  };

  return (
    
      <Layout meta={{title:"Tasks - NOTER AI", description:"", keywords: ["tasks, to-dos, productivity"]}}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Tasks</h1>
              <p className="text-gray-500">Manage your workflow with Kanban boards</p>
            </div>
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-400 text-white px-4 py-2 rounded-lg shadow"
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
          {isModalOpen && (
            <TaskModal
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleAddTask}
            />
          )}
        </Layout>
  );
};

export default TaskPage;