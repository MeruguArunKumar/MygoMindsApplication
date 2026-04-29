import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const coreTopicOrder = [
  ".NET MVC vs .NET Core MVC",
  "Core Project Structure",
  "Built-in Dependency Injection",
  "Middleware Pipeline",
  "Controllers & Actions",
  "Routing",
  "Model Binding",
  "Tag Helpers",
  "Filters",
  "Entity Framework Core"
];

const coreTopicsData: any = {
  ".NET MVC vs .NET Core MVC": {
    name: "MVC vs Core MVC",
    image: "https://img.icons8.com/color/96/compare.png",
    color: "from-indigo-500 to-blue-600",
  },
  "Core Project Structure": {
    name: "Project Structure",
    image: "https://img.icons8.com/color/96/folder-invoices.png",
    color: "from-yellow-500 to-orange-500",
  },
  "Built-in Dependency Injection": {
    name: "Dependency Injection",
    image: "https://img.icons8.com/color/96/connection-status-on.png",
    color: "from-pink-500 to-red-500",
  },
  "Middleware Pipeline": {
    name: "Middleware",
    image: "https://img.icons8.com/color/96/workflow.png",
    color: "from-green-500 to-teal-500",
  },
  "Controllers & Actions": {
    name: "Controllers & Actions",
    image: "https://img.icons8.com/color/96/controller.png",
    color: "from-blue-500 to-cyan-500",
  },
  "Routing": {
    name: "Routing",
    image: "https://img.icons8.com/color/96/route.png",
    color: "from-purple-500 to-indigo-500",
  },
  "Model Binding": {
    name: "Model Binding",
    image: "https://img.icons8.com/color/96/data-configuration.png",
    color: "from-cyan-500 to-blue-500",
  },
  "Tag Helpers": {
    name: "Tag Helpers",
    image: "https://img.icons8.com/color/96/code.png",
    color: "from-indigo-500 to-purple-500",
  },
  "Filters": {
    name: "Filters",
    image: "https://img.icons8.com/color/96/filter.png",
    color: "from-teal-500 to-green-500",
  },
  "Entity Framework Core": {
    name: "EF Core",
    image: "https://img.icons8.com/color/96/database.png",
    color: "from-blue-500 to-indigo-500",
  },
};

export default function DotNetCoreTopics() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("completedDotNetCoreTopics");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  // ❌ REMOVED locking logic completely
  // const isUnlocked = ...

  const markComplete = (key: string) => {
    if (!completed.includes(key)) {
      const updated = [...completed, key];
      setCompleted(updated);
      localStorage.setItem("completedDotNetCoreTopics", JSON.stringify(updated));
    }
  };

  const progress = Math.round((completed.length / coreTopicOrder.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          ASP.NET Core MVC Learning Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Step-by-step ASP.NET Core learning path
        </p>
      </div>

      {/* PROGRESS */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="flex justify-between mb-2 text-sm text-gray-600">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {coreTopicOrder.map((key) => {
          const topic = coreTopicsData[key];
          const done = completed.includes(key); // ✅ keep

          return (
            <div
              key={key}
              onClick={() => {
                // ✅ UPDATED: always clickable
                navigate(`/coremvc-topic/${key.toLowerCase().replaceAll(" ", "-")}`); // ✅ FIXED URL
                markComplete(key);
              }}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300" // ✅ UPDATED: removed disabled styles
            >

              {/* STATUS */}
              <div className="flex justify-end">
                {done && <span className="text-green-500 text-lg">✔</span>} {/* ✅ only tick */}
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