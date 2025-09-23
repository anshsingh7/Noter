// import { FileText, ListChecks, TrendingUp } from "lucide-react";

// const iconMap = {
//   notes: <FileText className="h-6 w-6 text-purple-600" />,
//   tasks: <ListChecks className="h-6 w-6 text-blue-600" />,
//   productivity: <TrendingUp className="h-6 w-6 text-green-600" />,
// };

// const StatCard = ({ type, title, value }) => {
//   return (
//     <div className="p-4 border rounded-lg shadow-sm bg-white flex items-center gap-4">
//       <div className="p-3 rounded-full bg-gray-100">
//         {iconMap[type]}
//       </div>
//       <div>
//         <h3 className="text-sm text-gray-500">{title}</h3>
//         <p className="text-lg font-semibold text-gray-800">{value}</p>
//       </div>
//     </div>
//   );
// };

// export default StatCard;

import { FileText, ListChecks, TrendingUp } from "lucide-react";

const iconMap = {
  notes: <FileText className="h-6 w-6 text-purple-600" />,
  tasks: <ListChecks className="h-6 w-6 text-blue-600" />,
  productivity: <TrendingUp className="h-6 w-6 text-green-600" />,
};

const StatCard = ({ type, title, value, change }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white flex items-center gap-4">
      <div className="p-3 rounded-full bg-gray-100">
        {iconMap[type]}
      </div>
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
        {change && <p className="text-xs text-green-500">{change}</p>}
      </div>
    </div>
  );
};

export default StatCard;
