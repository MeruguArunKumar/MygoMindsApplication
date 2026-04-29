import { useParams } from "react-router-dom";

const examsData: any = {

  /* ================= EF ================= */
  "entity-framework": [
    {
      title: "Test-1",
      desc: "Introduction, DbContext & DbSet",
     link: "https://online-test.classplusapp.com/?testId=69e7647cde9f7e28408a11ad&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/api-settings.png",
    },
    {
      title: "Test-2",
      desc: "Code First, Migrations, CRUD",
     link: "https://online-test.classplusapp.com/?testId=69e764cb9fb2385269285fb8&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
  ],

  /* ================= EF CORE ================= */
  "entity-framework-core": [
    {
      title: "Test-1",
      desc: "EF Core Basics",
     link: "https://online-test.classplusapp.com/?testId=69e71595636ed75be0bb2158&defaultLanguage=en",
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149648.png",
    },
    {
      title: "Test-2",
      desc: "EF vs EF Core Differences",
       link: "https://online-test.classplusapp.com/?testId=69e715c1bad887291c77a48b&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/design.png",
    },
  ],
};

export default function EFExamPage() {
  const { topic } = useParams();

  if (!topic) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // ✅ Keep it simple (keys already match route)
  const cleanTopic = topic.toLowerCase();

  const exams = examsData[cleanTopic] || [];

  // ✅ FIXED: safer title mapping
  const titles: any = {
    "entity-framework": "Entity Framework Tests",
    "entity-framework-core": "Entity Framework Core Tests",
  };

  const title = titles[cleanTopic] || "Tests"; // fallback safe

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold capitalize 
        bg-gradient-to-r from-blue-500 to-cyan-500 
        bg-clip-text text-transparent">
          {title}
        </h1>

        <p className="text-gray-500 mt-2">
          Practice and master {title}
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {exams.length > 0 ? (
          exams.map((exam: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md 
              hover:shadow-2xl hover:-translate-y-1 
              transition-all duration-300 relative"
            >

              <span className="absolute top-3 right-3 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                Test
              </span>

              <img
                src={exam.image}
                alt={exam.title}
                className="w-16 h-16 mx-auto mb-4"
              />

              <h2 className="text-lg font-semibold text-center">
                {exam.title}
              </h2>

              <p className="text-gray-500 text-sm text-center mt-2">
                {exam.desc}
              </p>

              <a
                href={exam.link}
                target="_blank"
                rel="noopener noreferrer" // ✅ added security
                className="block mt-6 text-center py-2 rounded-full text-white font-semibold
                bg-gradient-to-r from-blue-500 to-cyan-500 
                hover:scale-105 transition-all duration-300"
              >
                Start Test →
              </a>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No tests available
          </p>
        )}

      </div>
    </div>
  );
}