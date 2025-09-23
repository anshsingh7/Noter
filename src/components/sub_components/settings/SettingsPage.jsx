import Appearance from "./Appearance";
import Notifications from "./Notifications";
import AIFeatures from "./AIFeatures";
import PrivacySecurity from "./PrivacySecurity";
import DataManagement from "./DataManagement";

import Layout from "../../layout/MainLayout";

export default function SettingsPage() {
  return (
    <Layout meta={{title:"Settings - NOTER AI", description:"", keywords: ["settings, preferences, customization"]}}>
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
       </Layout>
  );
}