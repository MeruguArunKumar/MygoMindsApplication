import { useParams } from "react-router-dom";

const coreExamsByTopic: any = {

  ".net mvc vs .net core mvc": [
    {
      title: "Test-1",

      desc: "Diff MVC vs MVC Core",

      link: "https://online-test.classplusapp.com/?testId=69e7118dacf3fedfb6ac7b6c&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/compare.png",
    },
    {
      title: "Test-2",
      desc: "MVC vs MVC Core Code Differences",
      link: "https://online-test.classplusapp.com/?testId=69e711cce52577cb183d4b7b&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/compare.png",
    },
  ],

  "core project structure": [
    {
      title: "Test-1",
      desc: "Folder Structure (Core)",
      link: "https://online-test.classplusapp.com/?testId=69e712079aa84b44048c6c62&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/folder-invoices.png",
    },
    {
      title: "Test-2",
      desc: "Program.cs, appsettings.json, wwwroot",
      link: "https://online-test.classplusapp.com/?testId=69e71236186e2f33485ec3a2&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/folder-invoices.png",
    },
  ],

  "built-in dependency injection": [
    {
      title: "Test-1",
      desc: "DI Basics",
      link: "https://online-test.classplusapp.com/?testId=69e712b103b4549d829212e7&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },
    {
      title: "Test-2",
      desc: "Service Collection & Lifetimes",
      link: "https://online-test.classplusapp.com/?testId=69e712ee4769f54614dae5c7&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },
  ],

  "middleware pipeline": [
    {
      title: "Test-1",
      desc: "Middleware Concepts",
      link: "https://online-test.classplusapp.com/?testId=69e713431d90bfe21f3d5d57&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/workflow.png",
    },
    {
      title: "Test-2",
      desc: "Use(), Run(), Map()",
      link: "https://online-test.classplusapp.com/?testId=69e71387e52577dfbe3d4bc5&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/workflow.png",
    },
  ],

  "controllers & actions": [
    {
      title: "Test-1",
      desc: "Controller Basics",
      link: "https://online-test.classplusapp.com/?testId=69e7140b62b45b772e9b28ed&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/controller.png",
    },
    {
      title: "Test-2",
      desc: "Controller Code Flow",
      link: "https://online-test.classplusapp.com/?testId=69e714280ec53976f52e4088&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/controller.png",
    },
  ],

  "routing": [
    {
      title: "Test-1",
      desc: "Routing Basics",
      link: "https://online-test.classplusapp.com/?testId=69e7144d0f746316d5f283e4&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/route.png",
    },
    {
      title: "Test-2",
      desc: "Endpoint & Attribute Routing",
      link: "https://online-test.classplusapp.com/?testId=69e7146c62b45b6ffa9b2901&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/route.png",
    },
  ],

  "model binding": [
    {
      title: "Test-1",
      desc: "Model Binding Basics",
      link: "https://online-test.classplusapp.com/?testId=69e7149290dbce53cc3dcd35&defaultLanguage=en",
     image: "https://img.icons8.com/color/96/data-configuration.png",
    },
    {
      title: "Test-2",
      desc: "Model Binding with Code Examples",
      link: "https://online-test.classplusapp.com/?testId=69e714b5261346533a7be94c&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/data-configuration.png",
    },
  ],

  "tag helpers": [
    {
      title: "Test-1",
      desc: "Tag Helpers Basics",
      link: "https://online-test.classplusapp.com/?testId=69e714e3bad88774ed77a43d&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/code.png",
    },
    {
      title: "Test-2",
      desc: "Tag Helpers with Examples",
      link: "https://online-test.classplusapp.com/?testId=69e715084f04733c41cca53f&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/code.png",
    },
  ],

  "filters": [
    {
      title: "Test-1",
      desc: "Filters Basics",
      link: "https://online-test.classplusapp.com/?testId=69e7153450f524a29c00b3ed&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/filter.png",
    },
    {
      title: "Test-2",
      desc: "Filters with Code Examples",
      link: "https://online-test.classplusapp.com/?testId=69e7155cc337d35277a4daed&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/filter.png",
    },
  ],

  "entity framework core": [
    {
      title: "Test-1",
      desc: "EF Core Basics",
      link: "https://online-test.classplusapp.com/?testId=69e71595636ed75be0bb2158&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
    {
      title: "Test-2",
      desc: "EF vs EF Core Differences",
      link: "https://online-test.classplusapp.com/?testId=69e715c1bad887291c77a48b&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
  ],
};

export default function TopicExamPage2() {
  const { topic } = useParams();

  if (!topic) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const cleanTopic = topic.toLowerCase().trim();
  const exams = coreExamsByTopic[cleanTopic] || [];
  const formattedTitle = cleanTopic.replaceAll("-", " ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold capitalize 
        bg-gradient-to-r from-indigo-500 to-blue-500 
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

              <span className="absolute top-3 right-3 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
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
                className="block mt-6 text-center py-2 rounded-full text-white font-semibold
                bg-gradient-to-r from-indigo-500 to-blue-500 
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