import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const topicOrder = [
  "variables-datatypes",
  "operators",
  "typecasting",
  "conditionals",
  "loops",
  "arrays",
   "strings",
  "methods",
  "oops",
  "collections",
  "generics",
  "delegates",
  "advanced-csharp",
];

const topicsData: any = {
  "variables-datatypes": {
    name: "Variables",
    image: "https://img.icons8.com/color/96/variable.png",
    color: "from-blue-500 to-indigo-500",
  },
  operators: {
    name: "Operators",
    image: "https://img.icons8.com/color/96/calculator.png",
    color: "from-green-500 to-teal-500",
  },
  typecasting: {
    name: "Casting",
    image: "https://img.icons8.com/color/96/synchronize.png",
    color: "from-yellow-500 to-orange-500",
  },
  conditionals: {
    name: "Conditions",
    image: "https://img.icons8.com/color/96/decision.png",
    color: "from-pink-500 to-red-500",
  },
  loops: {
    name: "Loops",
    image: "https://img.icons8.com/color/96/repeat.png",
    color: "from-purple-500 to-indigo-500",
  },
  arrays: {
    name: "Arrays",
    image: "https://img.icons8.com/color/96/grid.png",
    color: "from-cyan-500 to-blue-500",
  },
  strings: {
  name: "Strings",
  image: "https://img.icons8.com/color/96/abc.png",
  color: "from-green-500 to-emerald-500",
},
  methods: {
    name: "Methods",
    image: "https://img.icons8.com/color/96/source-code.png",
    color: "from-indigo-500 to-purple-500",
  },
  oops: {
    name: "OOPS",
    image: "https://img.icons8.com/color/96/class.png",
    color: "from-orange-500 to-red-500",
  },
  collections: {
    name: "Collections",
    image: "https://img.icons8.com/color/96/database.png",
    color: "from-emerald-500 to-green-600",
  },
  generics: {
    name: "Generics",
    image: "https://img.icons8.com/color/96/settings.png",
    color: "from-gray-500 to-slate-600",
  },
  delegates: {
    name: "Delegates",
    image: "https://img.icons8.com/color/96/connection-status-on.png",
    color: "from-indigo-500 to-purple-500",
  },
  "advanced-csharp": {
    name: "Advanced",
    image: "https://img.icons8.com/color/96/rocket.png",
    color: "from-red-500 to-pink-500",
  },
};

export default function DotNetTopics() {
  const navigate = useNavigate();
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("completedTopics");
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
      localStorage.setItem("completedTopics", JSON.stringify(updated));
    }
  };

  const progress = Math.round((completed.length / topicOrder.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-purple-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Learning Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Track your progress & master .NET 
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
            className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-500"
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
                  navigate(`/topic/${key}`);
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

              {/* ICON BADGE */}
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