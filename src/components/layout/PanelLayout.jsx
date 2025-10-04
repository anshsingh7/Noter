import { Helmet } from "react-helmet";
import PanelHeader from "../PanelHeader";
import PanelSidebar from "../PanelSidebar";

const PanelLayout = ({meta, children }) => {

  const {
    title = "Profile - AI Notes App",
    description = "Smart note-taking app with AI features",
    keywords = "profiles,user, admin,settings",
  } = meta;

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

    <div className="flex h-screen">
      <PanelSidebar />
      <div className="flex flex-col flex-1">
        <PanelHeader/>
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
    </>
  );
};

export default PanelLayout;
