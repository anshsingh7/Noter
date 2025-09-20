export default function DataManagement() {
  const handleExport = () => {
    alert("Exporting data... (implement logic here)");
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all data?")) {
      alert("All data cleared! (implement logic here)");
    }
  };

  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="font-semibold text-lg mb-3">Data Management</h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Export All Data
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
        >
          Clear All Data
        </button>
      </div>

      <p className="text-sm text-gray-500">
        All your notes and tasks are stored locally in your browser. Use the export function to
        backup your data before clearing or switching devices.
      </p>
    </div>
  );
}
