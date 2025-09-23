import { useState } from "react";
import { Moon } from "lucide-react";

export default function Appearance() {
  const [theme, setTheme] = useState("light");
  const [interfaceSize, setInterfaceSize] = useState("Medium");

  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="font-semibold text-lg mb-3">Appearance</h2>

      {/* Theme Switch */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-medium">Theme</p>
          <p className="text-sm text-gray-500">Switch between light and dark mode</p>
        </div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <Moon className="w-5 h-5" />
        </button>
      </div>

      {/* Interface Size */}
      <div>
        <p className="font-medium mb-1">Interface Size</p>
        <select
          value={interfaceSize}
          onChange={(e) => setInterfaceSize(e.target.value)}
          className="w-full border rounded-md p-2"
        >
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </div>
    </div>
  );
}
