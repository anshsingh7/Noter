import React, { useState } from "react";

function AddTasks({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("todo");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSave({
      title,
      description,
      priority,
      deadline,
      status,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-600 text-white"
            >
              Save Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTasks;


// // src/AddTasks.jsx
// import React, { useEffect, useState } from "react";

// const AddTasks = ({ initial = {}, onClose, onCreate }) => {
//   const [title, setTitle] = useState(initial.title || "");
//   const [description, setDescription] = useState(initial.description || "");
//   const [priority, setPriority] = useState(initial.priority || "medium");
//   const [dueDate, setDueDate] = useState(initial.dueDate || "");
//   const [status, setStatus] = useState(initial.status || "todo"); // todo | inprogress | done

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [onClose]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) {
//       // simple validation
//       return alert("Please enter a title for the task.");
//     }

//     const task = {
//       id: Date.now(),
//       task: title.trim(),
//       description: description.trim(),
//       priority,
//       deadline: dueDate ? new Date(dueDate).toLocaleDateString() : "",
//       status,
//       createdAt: new Date().toISOString(),
//     };

//     onCreate(task);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b">
//           <h3 className="text-lg font-semibold">Create New Task</h3>
//           <button
//             aria-label="Close"
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <div className="p-6 space-y-4">
//             {/* Title */}
//             <label className="block">
//               <div className="text-sm font-medium mb-2">Title</div>
//               <input
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Enter task title..."
//                 className="w-full rounded-lg border-2 border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-4 py-3 outline-none transition"
//                 autoFocus
//               />
//             </label>

//             {/* Description */}
//             <label className="block">
//               <div className="text-sm font-medium mb-2">Description</div>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Describe what needs to be done..."
//                 rows={5}
//                 className="w-full rounded-lg border border-gray-200 px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-purple-200"
//               />
//             </label>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {/* Priority */}
//               <label>
//                 <div className="text-sm font-medium mb-2">Priority</div>
//                 <select
//                   value={priority}
//                   onChange={(e) => setPriority(e.target.value)}
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-purple-200"
//                 >
//                   <option value="low">Low</option>
//                   <option value="medium">Medium</option>
//                   <option value="high">High</option>
//                 </select>
//               </label>

//               {/* Due Date */}
//               <label>
//                 <div className="text-sm font-medium mb-2">Due Date (Optional)</div>
//                 <input
//                   type="date"
//                   value={dueDate}
//                   onChange={(e) => setDueDate(e.target.value)}
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-purple-200"
//                 />
//               </label>

//               {/* Status */}
//               <label>
//                 <div className="text-sm font-medium mb-2">Status</div>
//                 <select
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                   className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:ring-2 focus:ring-purple-200"
//                 >
//                   <option value="todo">To Do</option>
//                   <option value="inprogress">In Progress</option>
//                   <option value="done">Done</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="flex items-center justify-end gap-3 px-6 py-4 border-t">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded-lg bg-white border text-sm text-gray-700 hover:bg-gray-50"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 text-sm"
//             >
//               Create Task
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddTasks;
