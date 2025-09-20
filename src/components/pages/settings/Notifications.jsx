import { useState } from "react";

export default function Notifications() {
  const [taskReminders, setTaskReminders] = useState(true);
  const [noteUpdates, setNoteUpdates] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="font-semibold text-lg mb-3">Notifications</h2>

      <ToggleItem
        label="Task Reminders"
        description="Get notified about upcoming deadlines"
        enabled={taskReminders}
        setEnabled={setTaskReminders}
      />
      <ToggleItem
        label="Note Updates"
        description="Notifications for note changes"
        enabled={noteUpdates}
        setEnabled={setNoteUpdates}
      />
      <ToggleItem
        label="Weekly Digest"
        description="Summary of your weekly activity"
        enabled={weeklyDigest}
        setEnabled={setWeeklyDigest}
      />
    </div>
  );
}

function ToggleItem({ label, description, enabled, setEnabled }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          enabled ? "bg-purple-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
