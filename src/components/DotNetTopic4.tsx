import { useNavigate } from "react-router-dom";

const topics = ["entity-framework", "entity-framework-core"]; // ✅ FIXED

const topicsData: any = {
  "entity-framework": {
    name: "Entity Framework",
    image: "https://img.icons8.com/color/96/api-settings.png",
    color: "from-blue-500 to-cyan-500",
    desc: "EF Tests"
  },
  "entity-framework-core": {
    name: "Entity Framework Core",
    image: "https://cdn-icons-png.flaticon.com/512/4149/4149648.png",
    color: "from-purple-500 to-indigo-500",
    desc: "EFCore Tests"
  },
};

export default function EntityFrameworkTopics() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 px-6 py-16">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Entity Framework Learning Path
        </h1>
        <p className="text-gray-500 mt-3">
          Choose between EF and EF Core
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        {topics.map((key) => {
          const topic = topicsData[key];

          return (
            <div
              key={key}
              onClick={() => {
                // ✅ CLEAN ROUTING
                navigate(`/ef-topic/${key}`);
              }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl 
              hover:-translate-y-2 cursor-pointer transition-all duration-300 text-center"
            >

              {/* ICON */}
              <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r ${topic.color}`}>
                <img src={topic.image} className="w-12 h-12" />
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-semibold text-gray-800">
                {topic.name}
              </h2>

              {/* DESC */}
              <p className="text-gray-500 mt-3">
                {topic.desc}
              </p>

            </div>
          );
        })}

      </div>
    </div>
  );
}