function getPriorityColor(priority) {
  if (priority === "high") return "bg-red-100 text-red-600";
  if (priority === "medium") return "bg-yellow-100 text-yellow-700";
  return "bg-green-100 text-green-600";
}

function TaskCard({ tasks, onComplete }) {
  return (
    <div className="space-y-3 ">
       {tasks.map((task) => (
        <div key={task.id}
            className="flex items-center justify-between px-4 py-3 border rounded-lg hover:shadow-md transition bg-white">

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.status === "completed"}
              onChange={() => onComplete(task.id)}
              className="accent-purple-600 w-4 h-4 mr-3"
            />
            <span className={`font-medium ${task.status === "completed" ? "text-gray-400 line-through" : "text-gray-900"}`}>
              {task.task}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-xs px-3 py-1 rounded-full font-semibold capitalize ${getPriorityColor(task.priority)}`}>
              {task.priority}
            </span>
            <span className="text-xs text-gray-500">{task.deadline}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskCard;



// function TaskCard({ tasks, onDelete }) {
//   return (
//     tasks.map((task)=><div key={task.id} className="bg-white rounded-xl shadow p-4">
//       <div className="flex justify-between items-start">
//         <h3 className="font-semibold text-lg">{task.task}</h3>
//         <button
//           onClick={()=>onDelete(task.id)}
//           className="text-red-500 hover:text-red-700"
//         >
//           ✕
//         </button>
//       </div>
//       <p className="text-sm text-gray-600 mt-1">{task.description}</p>
//       <div className="flex justify-between items-center mt-3 text-sm">
//         <span className="px-2 py-1 rounded bg-gray-100">{task.priority}</span>
//         <span className="text-gray-500">{task.deadline}</span>
//       </div>
//       <p className="text-xs text-gray-400 mt-2">Status: {task.status}</p>
//     </div>)
//   );
// }

// export default TaskCard;