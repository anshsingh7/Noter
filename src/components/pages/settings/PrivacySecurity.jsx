export default function PrivacySecurity() {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="font-semibold text-lg mb-3">Privacy & Security</h2>

      <div className="flex items-center justify-between py-2">
        <div>
          <p className="font-medium">Local Storage</p>
          <p className="text-sm text-gray-500">Your data is stored locally in your browser</p>
        </div>
        <span className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <div className="flex items-center justify-between py-2">
        <div>
          <p className="font-medium">Data Privacy</p>
          <p className="text-sm text-gray-500">
            No data is sent to external servers. Everything stays on your device.
          </p>
        </div>
      </div>
    </div>
  );
}
