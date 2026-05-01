import { useParams } from "react-router-dom";

const examsData: any = {

  /* ================= WEB API (6 TESTS) ================= */
  "webapi": [
    {
      title: "Test-1",
      desc: "Web API Fundamentals + HTTP Basics",
      link: "https://online-test.classplusapp.com/?testId=69e9dc4cfbe72442a75b7af0&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/api-settings.png",
    },
    {
      title: "Test-2",
      desc: "Web API Core + Controllers",
      link: "https://online-test.classplusapp.com/?testId=69e9dc70a7b0938e4dd720b3&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/controller.png",
    },
    {
      title: "Test-3",
      desc: "Routing&Model Binding",
      link: "https://online-test.classplusapp.com/?testId=69e9dc9ba505895138e6b5e2&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/data-configuration.png",
    },
    {
      title: "Test-4",
      desc: "DI +EF Core",
      link: "https://online-test.classplusapp.com/?testId=69e9dcbd7c233271e551c5a5&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
    {
      title: "Test-5",
      desc: "LINQ+API Testing Tools + Swagger",
      link: "https://online-test.classplusapp.com/?testId=69e9dcde5875a39dc6293142&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/test-passed.png",
    },
    {
      title: "Test-6",
      desc: "JWT+Authorization+Exceptionhandling+Middleware",
      link: "https://online-test.classplusapp.com/?testId=69e9dd0e861b200c1ee54476&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/lock.png",
    },
  ],

  /* ================= MICROSERVICES (4 TESTS) ================= */
  "microservices": [

     {
      title: "Test-1",
      desc: "Introduction to Microservices,Monolithic vs Microservices",
      link: "https://online-test.classplusapp.com/?testId=69f46b0c94d0f53c901f761a&defaultLanguage=en",
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149648.png",
    },
    {
      title: "Test-2",
      desc: "Microservices Architecture",
      link: "https://online-test.classplusapp.com/?testId=69ec6c4341c98e70813182ee&defaultLanguage=en-US",
      image: "https://cdn-icons-png.flaticon.com/512/4149/4149648.png",
    },


{
  title: "Test-3",
  desc: "Service Design Principles, Database per Service, Bounded Context",
  link: "https://online-test.classplusapp.com/?testId=69ec6f568b959025ee81e2ae&defaultLanguage=en-US",
  image: "https://img.icons8.com/color/96/design.png",
},
{
  title: "Test-4",
  desc: "API Controllers, MVC vs API, DI, Folder Structure, API Testing",
  link: "https://online-test.classplusapp.com/?testId=69ec707e07e100582cb97674&defaultLanguage=en-US",
  image: "https://img.icons8.com/color/96/api.png",
},
{
  title: "Test-4",
  desc: "API Gateway, Routing, Aggregation, Ocelot, Service Discovery",
  link: "https://online-test.classplusapp.com/?testId=69ec70dec2b1c8f19fe1d313&defaultLanguage=en-US",
  image: "https://img.icons8.com/color/96/network.png",
},
{
  title: "Test-5",
  desc: "Saga Pattern, Data Consistency, JWT, OAuth, CORS, API Security",
  link: "https://online-test.classplusapp.com/?testId=69ec714a3f151dae26aab3e3&defaultLanguage=en-US",
  image: "https://img.icons8.com/color/96/security-checked.png",
},
{
  title: "Test-6",
  desc: "Configuration, Resilience (Polly), Logging, Docker, Kubernetes, CI/CD",
  link: "https://online-test.classplusapp.com/?testId=69ec718d861b20f5d7e8e138&defaultLanguage=en-US",
  image: "https://img.icons8.com/color/96/cloud.png",
},

  ],
};

export default function WebApiExamPage() {
  const { topic } = useParams();

  if (!topic) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const cleanTopic = topic.toLowerCase().trim();
  const exams = examsData[cleanTopic] || [];

  const title =
    cleanTopic === "webapi"
      ? "Web API Tests"
      : "Microservices Tests";

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