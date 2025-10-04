import PanelLayout from "../layout/PanelLayout";
import { Outlet } from "react-router-dom";

export default function ProfilePage() {
  return (
    <PanelLayout
      meta={{
        title: "Profile - AI Notes App",
        description: "Smart note-taking app with AI features",
        keywords: "profiles,user, admin,settings",
      }}
    >
      <Outlet />
    </PanelLayout>
  );
}
