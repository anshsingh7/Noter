import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center text-center px-6">
      {/* Background Illustration */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <div className="w-[900px] h-[500px] bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200 blur-3xl rounded-full"></div>
      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
        Your Ideas,
      </h1>
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
        <span className="bg-gradient-to-br from-indigo-600 to-purple-500 bg-clip-text text-transparent">Organized & Enhanced</span>
      </h1>
      <h1 className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl">
        by Noter
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        The modern workspace that learns from you. Take notes, manage tasks,
        and let AI help you stay productive.
      </p>
      
      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <Link to="/dashboard" className="bg-gradient-to-r from-indigo-600 to-purple-400 text-white px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105">
          Get Started →
        </Link>
        {/* <button className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg shadow-md transition">
          Watch Demo
        </button> */}
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold">Smart Notes</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Rich text editing with AI-powered organization
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-xl font-semibold">Task Management</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Kanban boards that adapt to your workflow
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-xl font-semibold">AI Assistant</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Get suggestions and insights on your content
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;