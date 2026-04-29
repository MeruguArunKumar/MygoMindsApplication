import { useParams } from "react-router-dom";

const examsByTopic: any = {
  "web fundamentals": [
    {
      title: "Web Fundamentals Test 1",
      desc: "Introduction to Web, Client–Server Architecture",
      link: "https://online-test.classplusapp.com/?testId=69e75f872faaee51bfe49715&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/internet.png",
    },
    {
      title: "Web Fundamentals Test 2",
      desc: "HTTP/HTTPS, Request–Response Lifecycle",
      link: "https://online-test.classplusapp.com/?testId=69e7600cafaa137c8da88e30&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/internet.png",
    },
  ],

  "mvc architecture": [
    {
      title: "MVC Architecture Test 1",
      desc: "What is MVC, MVC Request Flow",
      link: "https://online-test.classplusapp.com/?testId=69e7609c700c4108cc48f192&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/flow-chart.png",
    },


     {
      title: "MVC Architecture Test 2",
      desc: "Roles of Model, View, Controller, Advantages",
      link: "https://online-test.classplusapp.com/?testId=69e7610c7b7e6a58153cc30d&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/flow-chart.png",
    },
  ],

  "oop concepts (foundation)": [
    {
      title: "OOP Test 1",
      desc: "Encapsulation, Inheritance",
      link: "https://online-test.classplusapp.com/?testId=69e7618b1f79962f35336ce7&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/class.png",
    },
    {
      title: "OOP Test 2",
      desc: "Polymorphism, Abstraction",
      link: "https://online-test.classplusapp.com/?testId=69e761afd53ea61201944be0&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/class.png",
    },
    {
      title: "OOP Test 3",
      desc: "IS-A / HAS-A, Method Return Types",
      link: "https://online-test.classplusapp.com/?testId=69e761cb9366ee60ddf80626&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/class.png",
    },
  ],

  "design patterns": [
    {
      title: "Design Patterns Test 1",
      desc: "Singleton, Factory Pattern",
      link: "https://online-test.classplusapp.com/?testId=69e761f13627507e348e7868&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },
    {
      title: "Design Patterns Test 2",
      desc: "Dependency Injection Basics",
      link: "https://online-test.classplusapp.com/?testId=69e762100ec539410c2e7d40&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },
  ],

  "project & folder structure": [
    {
      title: "Project Structure Test 1",
      desc: "MVC Project Structure, Folders",
      link: "https://online-test.classplusapp.com/?testId=69e76233ecb23a2061ac7af6&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/folder-invoices.png",
    },
    {
      title: "Project Structure Test 2",
      desc: "App_Start, Web.config Basics",
      link: "https://online-test.classplusapp.com/?testId=69e7625dde9f7e31bc8a10e4&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/folder-invoices.png",
    },
  ],

  "controllers & routing": [
    {
      title: "Controllers Test 1",
      desc: "Controllers & Action Methods",
      link: "https://online-test.classplusapp.com/?testId=69e7628b450b8cad294aad69&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/api-settings.png",
    },
    {
      title: "Controllers Test 2",
      desc: "Action Results & Routing",
      link: "https://online-test.classplusapp.com/?testId=69e762a62faaeebcdbe49bb1&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/api-settings.png",
    },
  ],

  "views & razor": [
    {
      title: "Views Test 1",
      desc: "Razor Syntax, Layout Pages",
      link: "https://online-test.classplusapp.com/?testId=69e762cede9f7ed8b68a10ee&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/code.png",
    },
    {
      title: "Views Test 2",
      desc: "Strongly Typed Views, Partial Views",
      link: "https://online-test.classplusapp.com/?testId=69e762e950f524e61700f072&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/code.png",
    },
  ],

  "html helpers & extension methods": [
    {
      title: "HTML Helpers Test 1",
      desc: "HTML Helpers, Strongly Typed Helpers",
      link: "https://online-test.classplusapp.com/?testId=69e7631b08fb353648d1a90b&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/source-code.png",
    },
    {
      title: "HTML Helpers Test 2",
      desc: "Custom Helpers, Extension Methods",
      link: "https://online-test.classplusapp.com/?testId=69e7633c700c41aa9d48f237&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/source-code.png",
    },
  ],

  "state management": [
    {
      title: "State Management Test 1",
      desc: "ViewData, ViewBag, TempData",
      link: "https://online-test.classplusapp.com/?testId=69e7636fe9d86007e5cf47ec&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
    {
      title: "State Management Test 2",
      desc: "Session, Cookies",
      link: "https://online-test.classplusapp.com/?testId=69e76396743d9987b781a5c4&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
     {
      title: "State Management Test 3",
      desc: "Diff B/W VB,VD,TDSession, Cookies",
      link: "https://online-test.classplusapp.com/?testId=69e763cb41d33da53406d5e4&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
  ],

  "model binding & validation": [
    {
      title: "Model Binding Test 1",
      desc: "Model Binding, Data Annotations",
      link: "https://online-test.classplusapp.com/?testId=69e7640ede9f7e0dd58a119c&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/checked--v1.png",
    },
    {
      title: "Model Binding Test 2",
      desc: "Client-Side & Server-Side Validation",
      link: "https://online-test.classplusapp.com/?testId=69e7642c2469398e4eac2ea7&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/checked--v1.png",
    },
    {
      title: "Model Binding Test 3",
      desc: "Scaffolding",
      link: "https://online-test.classplusapp.com/?testId=69e76447861b200b34e40a07&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/checked--v1.png",
    },
  ],

  "entity framework (ef)": [
    {
      title: "EF Test 1",
      desc: "Introduction, DbContext & DbSet",
      link: "https://online-test.classplusapp.com/?testId=69e7647cde9f7e28408a11ad&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
    {
      title: "EF Test 2",
      desc: "Code First, Migrations, CRUD",
      link: "https://online-test.classplusapp.com/?testId=69e764cb9fb2385269285fb8&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
  ],

  "linq": [
    {
      title: "LINQ Test 1",
      desc: "Where, Select",
      link: "https://online-test.classplusapp.com/?testId=69e764f1d53ea61ecc944d58&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/filter.png",
    },
    {
      title: "LINQ Test 2",
      desc: "FirstOrDefault, SingleOrDefault",
      link: "https://online-test.classplusapp.com/?testId=69e765159fb238128d285fc8&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/filter.png",
    },
    {
      title: "LINQ Test 3",
      desc: "OrderBy, GroupBy, Deferred Execution",
      link: "https://online-test.classplusapp.com/?testId=69e7653724693929fcac2ed1&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/filter.png",
    },
  ],

  "filters": [
    {
      title: "Filters Test 1",
      desc: "Authorization, Action Filter",
      link: "https://online-test.classplusapp.com/?testId=69e765642faaeec18ce49c9b&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/security-checked.png",
    },
    {
      title: "Filters Test 2",
      desc: "Result Filter, Exception Filter",
      link: "https://online-test.classplusapp.com/?testId=69e765882faaee7ceae49ca0&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/security-checked.png",
    },
  ],

  "security, ajax & client interaction": [
    {
      title: "Security Test 1",
      desc: "Authentication, Authorization, Security Practices",
      link: "https://online-test.classplusapp.com/?testId=69e765aaf8f3bb9a6a41ddd8&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/lock--v1.png",
    },
    {
      title: "Security Test 2",
      desc: "AJAX, jQuery AJAX, Partial Page Updates",
      link: "https://online-test.classplusapp.com/?testId=69e765c87b7e6a68c43cc81a&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/lock--v1.png",
    },
  ],

  "dependency injection (advanced)": [
    {
      title: "DI Test 1",
      desc: "Constructor Injection, Interface Design",
      link: "https://online-test.classplusapp.com/?testId=69e766019992000575a0e8df&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },
    {
      title: "DI Test 2",
      desc: "Loose Coupling",
      link: "https://online-test.classplusapp.com/?testId=69e7663cae3cea9fbc990fdf&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },

  ],

  // 👉 Add all your remaining topics same way
};

export default function TopicExamPage() {
  const { topic } = useParams();

  if (!topic) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // ✅ FIXED NORMALIZATION
  const cleanTopic = topic.toLowerCase().replaceAll("-", " ").trim();

  const exams = examsByTopic[cleanTopic] || [];
  const formattedTitle = cleanTopic;

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
            No tests available for <b>{formattedTitle}</b>
          </p>
        )}

      </div>
    </div>
  );
}