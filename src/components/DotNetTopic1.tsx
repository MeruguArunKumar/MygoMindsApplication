import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // ✅ ADDED

const topicOrder = [
  "Web Fundamentals",
  "MVC Architecture",
  "OOP Concepts (Foundation)",
  "Design Patterns",
  "Project & Folder Structure",
  "Controllers & Routing",
  "Views & Razor",
  "HTML Helpers & Extension Methods",
  "State Management",
  "Model Binding & Validation",
  "Entity Framework (EF)",
  "LINQ",
  "Filters",
  "Security, AJAX & Client Interaction",
  "Dependency Injection (Advanced)"
];

const topicsData: any = {
  "Web Fundamentals": {
    name: "Web Fundamentals",
    image: "https://img.icons8.com/color/96/internet.png",
    color: "from-emerald-500 to-green-600",
  },
  "MVC Architecture": {
    name: "MVC Architecture",
    image: "https://img.icons8.com/color/96/flow-chart.png",
    color: "from-blue-500 to-indigo-500",
  },
  "OOP Concepts (Foundation)": {
    name: "OOP Concepts",
    image: "https://img.icons8.com/color/96/class.png",
    color: "from-red-500 to-pink-500",
  },
  "Design Patterns": {
    name: "Design Patterns",
    image: "https://img.icons8.com/color/96/connection-status-on.png",
    color: "from-purple-500 to-indigo-500",
  },
  "Project & Folder Structure": {
    name: "Project Structure",
    image: "https://img.icons8.com/color/96/folder-invoices.png",
    color: "from-yellow-500 to-orange-500",
  },
  "Controllers & Routing": {
    name: "Controllers & Routing",
    image: "https://img.icons8.com/color/96/api-settings.png",
    color: "from-cyan-500 to-blue-500",
  },
  "Views & Razor": {
    name: "Views & Razor",
    image: "https://img.icons8.com/color/96/code.png",
    color: "from-indigo-500 to-purple-500",
  },
  "HTML Helpers & Extension Methods": {
    name: "HTML Helpers",
    image: "https://img.icons8.com/color/96/source-code.png",
    color: "from-pink-500 to-red-500",
  },
  "State Management": {
    name: "State Management",
    image: "https://img.icons8.com/color/96/database.png",
    color: "from-green-500 to-teal-500",
  },
  "Model Binding & Validation": {
    name: "Model Binding",
    image: "https://img.icons8.com/color/96/checked--v1.png",
    color: "from-blue-500 to-cyan-500",
  },
  "Entity Framework (EF)": {
    name: "Entity Framework",
    image: "https://img.icons8.com/color/96/database.png",
    color: "from-indigo-500 to-blue-500",
  },
  "LINQ": {
    name: "LINQ",
    image: "https://img.icons8.com/color/96/filter.png",
    color: "from-orange-500 to-red-500",
  },
  "Filters": {
    name: "Filters",
    image: "https://img.icons8.com/color/96/security-checked.png",
    color: "from-teal-500 to-green-500",
  },
  "Security, AJAX & Client Interaction": {
    name: "Security & AJAX",
    image: "https://img.icons8.com/color/96/lock--v1.png",
    color: "from-gray-600 to-gray-800",
  },
  "Dependency Injection (Advanced)": {
    name: "Dependency Injection",
    image: "https://img.icons8.com/color/96/connection-status-on.png",
    color: "from-pink-500 to-red-500",
  },
};

export default function DotNetTopics() {
  const navigate = useNavigate();

  // ✅ ADDED: state for completed topics
  const [completed, setCompleted] = useState<string[]>([]);

  // ✅ ADDED: load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("mvcCompletedTopics");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  // ✅ ADDED: mark topic complete
  const markComplete = (key: string) => {
    if (!completed.includes(key)) {
      const updated = [...completed, key];
      setCompleted(updated);
      localStorage.setItem("mvcCompletedTopics", JSON.stringify(updated));
    }
  };

  // ✅ ADDED: progress calculation
  const progress = Math.round((completed.length / topicOrder.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-purple-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          ASP.NET MVC Learning Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Step-by-step ASP.NET MVC learning path
        </p>
      </div>

      {/* ✅ ADDED: PROGRESS BAR */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {topicOrder.map((key) => {
          const topic = topicsData[key];
          const done = completed.includes(key); // ✅ ADDED

          return (
            <div
              key={key}
              onClick={() => {
                navigate(`/mvc-topic/${key.toLowerCase().replaceAll(" ", "-")}`);
                markComplete(key); // ✅ ADDED
              }}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300"
            >

              {/* ✅ ADDED: STATUS (tick mark) */}
              <div className="flex justify-end">
                {done && <span className="text-green-500 text-lg">✔</span>}
              </div>

              {/* ICON */}
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r ${topic.color}`}
              >
                <img src={topic.image} className="w-8 h-8" />
              </div>

              {/* TITLE */}
              <h3 className="text-center font-semibold text-gray-700">
                {topic.name}
              </h3>
            </div>
          );
        })}

      </div>
    </div>
  );
}