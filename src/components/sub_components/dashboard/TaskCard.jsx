function TaskCard({ tasks, onDelete }) {
  return (
    tasks.map((task)=><div key={task.id} className="bg-white rounded-xl shadow p-4">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-lg">{task.task}</h3>
        <button
          onClick={()=>onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          ✕
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
      <div className="flex justify-between items-center mt-3 text-sm">
        <span className="px-2 py-1 rounded bg-gray-100">{task.priority}</span>
        <span className="text-gray-500">{task.deadline}</span>
      </div>
      <p className="text-xs text-gray-400 mt-2">Status: {task.status}</p>
    </div>)
  );
}

export default TaskCard;