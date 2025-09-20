// src/components/Card.jsx
import React from "react";

const Card = ({ item, type = "notes" }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-3">{item.title}</h2>
      <p className="text-gray-600 text-sm flex-1">{item.description}</p>

      {type === "notes" && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags?.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-400 items-center">
            <span>📅 {item.date}</span>
            <span>{item.words ?? (item.description ? item.description.split(/\s+/).length : 0)} words</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
