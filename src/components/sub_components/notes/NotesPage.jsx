import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Plus } from "lucide-react";
import Layout from "../../layout/MainLayout";
import CardContainer from "./CardContainer";
import { addNote } from "../../../redux/reduce/noteSlice";
import NoteModal from "../../modal/NoteModal";

const NotesPage = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  const handleAddNote = (note) => {
    dispatch(addNote(note)); // ✅ Updates redux store
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

      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 border rounded-lg mb-6"
      />

      <CardContainer items={filteredNotes} type="notes" />
      
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
