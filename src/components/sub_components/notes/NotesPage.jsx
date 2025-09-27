import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plus, Tag, Search } from "lucide-react";
import Layout from "../../layout/MainLayout";
import CardContainer from "./CardContainer";
import { addNote } from "../../../redux/reduce/noteSlice";
import NoteModal from "../../modal/NoteModal";

const NotesPage = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  // Collect unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set();
    notes.forEach((note) => note.tags?.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet);
  }, [notes]);

  // Toggle tag filter
  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Filter logic (search + tags)
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => note.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const handleAddNote = (note) => {
    dispatch(addNote(note));
    setIsModalOpen(false);
  };

  return (
    <Layout
      footer={true}
      meta={{
        title: "Notes - NOTER AI",
        description: "",
        keywords: "notes, ai, productivity",
      }}
    >
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Notes</h1>
          <p className="text-gray-500">Organize your thoughts and ideas</p>
        </div>
        <button
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-400 text-white px-4 py-2 rounded-lg shadow"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={18} /> New Note
        </button>
      </div>
      
      {/* Search and Tags */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Search Box */}
        <div className="flex items-center w-full sm:w-1/3 border rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-gray-700"
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTags([])}
            className={`px-3 py-1 text-sm rounded-md border transition ${
              selectedTags.length === 0
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`flex items-center gap-1 px-3 py-1 text-sm rounded-md border transition ${
                selectedTags.includes(tag)
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Tag className="w-4 h-4" />
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Notes List */}
      <CardContainer items={filteredNotes} type="notes" />

      {/* Modal */}
      {isModalOpen && (
        <NoteModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddNote}
        />
      )}
    </Layout>
  );
};

export default NotesPage;








// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Plus } from "lucide-react";
// import Layout from "../../layout/MainLayout";
// import CardContainer from "./CardContainer";
// import { addNote } from "../../../redux/reduce/noteSlice";
// import NoteModal from "../../modal/NoteModal";

// const NotesPage = () => {
//   const dispatch = useDispatch();
//   const notes = useSelector((state) => state.notes.notes);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const filteredNotes = notes.filter(
//     (note) =>
//       note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       note.tags.some((tag) =>
//         tag.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//   );

//   const handleAddNote = (note) => {
//     dispatch(addNote(note)); // ✅ Updates redux store
//     setIsModalOpen(false);
//   };

//   return (
//     <Layout
//       footer={true}
//       meta={{
//         title: "Notes - NOTER AI",
//         description: "",
//         keywords: "notes, ai, productivity",
//       }}
//     >
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">Notes</h1>
//           <p className="text-gray-500">Organize your thoughts and ideas</p>
//         </div>
//         <button
//           className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-400 text-white px-4 py-2 rounded-lg shadow"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <Plus size={18} /> New Note
//         </button>
//       </div>

//       <input
//         type="text"
//         placeholder="Search notes..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="w-full p-3 border rounded-lg mb-6"
//       />

//       <CardContainer items={filteredNotes} type="notes" />
      
//       {isModalOpen && (
//         <NoteModal
//           onClose={() => setIsModalOpen(false)}
//           onSubmit={handleAddNote}
//         />
//       )}
//     </Layout>
//   );
// };

// export default NotesPage;
