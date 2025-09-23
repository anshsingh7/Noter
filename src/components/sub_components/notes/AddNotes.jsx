import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteModal from "../../../modal/NoteModal";

const AddNewNotesPage = () => {
  const { notes, addNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/notes");
  };

  const handleCreate = (note) => {
    addNote(note);
    // After creation, go back to notes list (modal closed)
    navigate("/notes");
  };

  return (
    <div className="flex h-screen">

      {/* Modal overlay */}
      <NoteModal onClose={handleClose} onSubmit={handleCreate} />
    </div>
  );
};

export default AddNewNotesPage;