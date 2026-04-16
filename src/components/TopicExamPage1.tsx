import { useParams } from "react-router-dom";

const examsByTopic: any = {

  /* ================= .NET ARCHITECTURE ================= */
  "dotnet-architecture": [
    {
      title: ".NET Architecture Test 1",
      desc: "Basics of .NET architecture",
      link: "#",
      image: "https://img.icons8.com/color/96/system-information.png",
    },
    {
      title: ".NET Architecture Test 2",
      desc: "CLR, IL, JIT concepts",
      link: "#",
      image: "https://img.icons8.com/color/96/system-information.png",
    },
  ],

  /* ================= CLR CTS CLS ================= */
  "clr-cts-cls": [
    {
      title: "CLR Test",
      desc: "Runtime & execution concepts",
      link: "#",
      image: "https://img.icons8.com/color/96/settings.png",
    },
    {
      title: "CTS & CLS Test",
      desc: "Type system & language rules",
      link: "#",
      image: "https://img.icons8.com/color/96/settings.png",
    },
  ],

  /* ================= PROJECT STRUCTURE ================= */
  "project-structure": [
    {
      title: "Project Structure Test",
      desc: "Solution, project & folders",
      link: "#",
      image: "https://img.icons8.com/color/96/folder-invoices.png",
    },
  ],

  /* ================= MIDDLEWARE ================= */
  "middleware": [
    {
      title: "Middleware Basics",
      desc: "Pipeline & request flow",
      link: "#",
      image: "https://img.icons8.com/color/96/flow-chart.png",
    },
    {
      title: "Middleware Advanced",
      desc: "Use, Run, Map methods",
      link: "#",
      image: "https://img.icons8.com/color/96/flow-chart.png",
    },
  ],

  /* ================= DEPENDENCY INJECTION ================= */
  "dependency-injection": [
    {
      title: "DI Basics",
      desc: "Introduction & concepts",
      link: "#",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },
    {
      title: "DI Lifetimes",
      desc: "Scoped, Singleton, Transient",
      link: "#",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },
  ],

  /* ================= CONFIGURATION ================= */
  "configuration-logging": [
    {
      title: "Configuration Test",
      desc: "appsettings.json usage",
      link: "#",
      image: "https://img.icons8.com/color/96/system-task.png",
    },
    {
      title: "Logging Test",
      desc: "ILogger & log levels",
      link: "#",
      image: "https://img.icons8.com/color/96/system-task.png",
    },
  ],

  /* ================= WEB BASICS ================= */
  "web-basics": [
    {
      title: "Web Basics Test 1",
      desc: "Browser, Server, Request",
      link: "#",
      image: "https://img.icons8.com/color/96/internet.png",
    },
    {
      title: "Web Basics Test 2",
      desc: "HTTP, GET, POST",
      link: "#",
      image: "https://img.icons8.com/color/96/internet.png",
    },
  ],

  /* ================= OOPS IN MVC ================= */
  "oops-mvc": [
    {
      title: "MVC Basics",
      desc: "Model, View, Controller",
      link: "#",
      image: "https://img.icons8.com/color/96/class.png",
    },
    {
      title: "OOP in MVC",
      desc: "Properties, classes, flow",
      link: "#",
      image: "https://img.icons8.com/color/96/class.png",
    },
  ],
};

export default function TopicExamPage() {
  const { topic } = useParams();

  // ✅ Handle undefined safely
  if (!topic) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // ✅ Clean topic (fix mismatch issues)
  const cleanTopic = topic.toLowerCase().trim();

  // ✅ Get exams
  const exams = examsByTopic[cleanTopic] || [];

  // ✅ Better title
  const formattedTitle = cleanTopic.replaceAll("-", " ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-purple-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold capitalize 
        bg-gradient-to-r from-blue-500 to-indigo-500 
        bg-clip-text text-transparent">
          {formattedTitle} Tests
        </h1>

        <p className="text-gray-500 mt-2">
          Practice and master {formattedTitle}
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

              {/* BADGE */}
              <span className="absolute top-3 right-3 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                Test
              </span>

              {/* IMAGE */}
              <img
                src={exam.image}
                alt={exam.title}
                className="w-16 h-16 mx-auto mb-4"
              />

              {/* TITLE */}
              <h2 className="text-lg font-semibold text-center">
                {exam.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-500 text-sm text-center mt-2">
                {exam.desc}
              </p>

              {/* BUTTON */}
              <a
                href={exam.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center py-2 rounded-full text-white font-semibold
                bg-gradient-to-r from-blue-500 to-indigo-500 
                hover:scale-105 transition-all duration-300"
              >
                Start Test →
              </a>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No tests available for <b>{cleanTopic}</b>
          </p>
        )}

      </div>
    </div>
  );
}