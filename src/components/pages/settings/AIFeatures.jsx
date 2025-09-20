export default function AIFeatures() {
  const features = [
    { label: "Auto-Summarization", desc: "Automatically generate summaries for long notes" },
    { label: "Smart Tagging", desc: "AI-powered tag suggestions" },
    { label: "Content Suggestions", desc: "Get AI suggestions for better organization" },
  ];

  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <h2 className="font-semibold text-lg mb-3">
        AI Features <span className="ml-2 text-xs text-purple-600">Coming Soon</span>
      </h2>
      {features.map((f, i) => (
        <div key={i} className="flex items-center justify-between py-2">
          <div>
            <p className="font-medium">{f.label}</p>
            <p className="text-sm text-gray-500">{f.desc}</p>
          </div>
          <div className="w-12 h-6 bg-gray-200 rounded-full flex items-center p-1">
            <div className="w-4 h-4 bg-gray-400 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
