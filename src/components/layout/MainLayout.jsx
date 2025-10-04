import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Footer from "../Footer";
import { Helmet } from "react-helmet";

export default function Layout({ children, footer = false, meta = {} }) {
  const {
    title = "AI Notes App",
    description = "Smart note-taking app with AI features",
    keywords = "notes, ai, productivity, tasks, reminders",
  } = meta;

  return (
    <>
      {/* 🔹 SEO Meta Section */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex flex-col min-h-screen">
          <Topbar />

          <main className="flex-1 p-6 bg-gray-100">{children}</main>

          {footer && <Footer />}
        </div>
      </div>
    </>
  );
}
