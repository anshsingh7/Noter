// src/components/NoteModal.jsx
import React, { useEffect, useState } from "react";

const NoteModal = ({ initial = {}, onClose, onSubmit }) => {
  const [title, setTitle] = useState(initial.title || "");
  const [content, setContent] = useState(initial.description || "");
  const [tags, setTags] = useState((initial.tags && initial.tags.join(", ")) || "");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const note = {
      title: title || "Untitled",
      description: content || "",
      tags: tagsArray,
      date: "Just now",
      words: content ? content.split(/\s+/).length : 0,
    };
    onSubmit(note);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold">Create New Note</h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            <label className="block">
              <div className="text-sm font-medium mb-2">Title</div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter note title..."
                className="w-full rounded-lg border-2 border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-200 px-4 py-3 outline-none transition"
              />
            </label>

            <label className="block">
              <div className="text-sm font-medium mb-2">Content</div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note content..."
                rows={8}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </label>

            <label className="block">
              <div className="text-sm font-medium mb-2">Tags (comma-separated)</div>
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="project, ideas, important..."
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
            </label>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 px-6 py-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white border text-sm text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 text-sm"
            >
              Create Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
