import Appearance from "./Appearance";
import Notifications from "./Notifications";
import AIFeatures from "./AIFeatures";
import PrivacySecurity from "./PrivacySecurity";
import DataManagement from "./DataManagement";

import Sidebar from "../../dashboard/Sidebar";
import Topbar from "../../dashboard/Topbar";

export default function SettingsPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar />

        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-600 mb-6">
            Customize your AI Notes experience
          </p>

          {/* Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Appearance />
            <Notifications />
            <AIFeatures />
            <PrivacySecurity />
          </div>

          {/* Data Management */}
          <div className="mt-6">
            <DataManagement />
          </div>
        </main>
      </div>
    </div>
  );
}