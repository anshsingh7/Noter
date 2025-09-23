import React from "react";

const NoteCard = ({ title, description, tags = [], onEdit, onDelete }) => {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition bg-white">
      {/* Title */}
      <h3 className="font-medium text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={onEdit}
          className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-xs px-3 py-1 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;