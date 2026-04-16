import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const topicOrder = [
  "dotnet-architecture",
  "clr-cts-cls",
  "project-structure",
  "middleware",
  "dependency-injection",
  "configuration-logging",
  "web-basics",
  "oops-mvc",
];

const topicsData: any = {
  "dotnet-architecture": {
    name: ".NET Architecture",
     image: "https://img.icons8.com/color/96/system-information.png",
    color: "from-blue-500 to-indigo-500",
  },
  "clr-cts-cls": {
    name: "CLR, CTS, CLS",
    image: "https://img.icons8.com/color/96/system-information.png",
    color: "from-green-500 to-teal-500",
  },
  "project-structure": {
    name: "Project Structure",
    image: "https://img.icons8.com/color/96/folder-invoices.png",
    color: "from-yellow-500 to-orange-500",
  },
  middleware: {
    name: "Middleware Pipeline",
    image: "https://img.icons8.com/color/96/flow-chart.png",
    color: "from-purple-500 to-indigo-500",
  },
  "dependency-injection": {
    name: "Dependency Injection",
    image: "https://img.icons8.com/color/96/connection-status-on.png",
    color: "from-pink-500 to-red-500",
  },
  "configuration-logging": {
    name: "Configuration & Logging",
    image: "https://img.icons8.com/color/96/system-task.png",
    color: "from-cyan-500 to-blue-500",
  },
  "web-basics": {
    name: "Web Basics",
    image: "https://img.icons8.com/color/96/internet.png",
    color: "from-emerald-500 to-green-600",
  },
  "oops-mvc": {
    name: "OOPs in MVC",
    image: "https://img.icons8.com/color/96/class.png",
    color: "from-red-500 to-pink-500",
  },
};

export default function DotNetTopics() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("completedDotNetTopics");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const isUnlocked = (key: string) => {
    const index = topicOrder.indexOf(key);
    if (index === 0) return true;
    return completed.includes(topicOrder[index - 1]);
  };

  const markComplete = (key: string) => {
    if (!completed.includes(key)) {
      const updated = [...completed, key];
      setCompleted(updated);
      localStorage.setItem("completedDotNetTopics", JSON.stringify(updated));
    }
  };

  const progress = Math.round((completed.length / topicOrder.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-purple-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
          .NET Learning Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Master .NET & ASP.NET Core step-by-step
        </p>
      </div>

      {/* PROGRESS BAR */}
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
          const unlocked = isUnlocked(key);
          const done = completed.includes(key);

          return (
            <div
              key={key}
              onClick={() => {
                if (unlocked) {
                  navigate(`/mvc-topic/${key}`);
                  markComplete(key);
                }
              }}
              className={`rounded-2xl p-5 shadow-md transition-all duration-300
              ${unlocked
                ? "bg-white hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                : "bg-gray-100 opacity-60 cursor-not-allowed"}`}
            >

              {/* STATUS */}
              <div className="flex justify-end">
                {done && <span className="text-green-500 text-lg">✔</span>}
                {!unlocked && <span className="text-red-400 text-lg">🔒</span>}
              </div>

              {/* ICON */}
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center 
                bg-gradient-to-r ${topic.color}`}
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