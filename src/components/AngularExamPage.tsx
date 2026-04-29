import { useParams } from "react-router-dom";

const examsData: any = {
  "angular-topics": [

    {
      title: "Test-1",
      desc: "Core Basics + TypeScript + Folder Structure",
      link: "https://online-test.classplusapp.com/?testId=69f041fa4328141823fc3cdb&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/angularjs.png",
    },

    {
      title: "Test-2",
      desc: "Components + Data Binding",
      link: "https://online-test.classplusapp.com/?testId=69f061db5c00d30bee9e9076&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/source-code.png",
    },

    {
      title: "Test-3",
      desc: "Directives + Templates + Pipes",
      link: "https://online-test.classplusapp.com/?testId=69f062975ab608f7f6a3bef1&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/source-code.png",
    },

    {
      title: "Test-4",
      desc: "Component Communication + Services + Routing",
      link: "https://online-test.classplusapp.com/?testId=69f0632af381281c6acf31f2&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/api.png",
    },

    {
      title: "Test-5",
      desc: "Forms + HTTP + Lifecycle Hooks",
      link: "https://online-test.classplusapp.com/?testId=69f064c63b4bdeb6e5b771cd&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/form.png",
    },

    {
      title: "Test-6",
      desc: "Advanced + State Management + RxJS",
      link: "https://online-test.classplusapp.com/?testId=69f065699669f93682b31834&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/cloud.png",
    },

  ],
};

export default function AngularExamPage() {
  const { topic } = useParams();

  const exams = examsData["angular-topics"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-red-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold 
        bg-gradient-to-r from-red-500 to-pink-500 
        bg-clip-text text-transparent">
          Angular Tests
        </h1>

        <p className="text-gray-500 mt-2">
          Practice and master Angular
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {exams.map((exam: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md 
            hover:shadow-2xl hover:-translate-y-1 
            transition-all duration-300 relative"
          >

            {/* Badge */}
            <span className="absolute top-3 right-3 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
              Test
            </span>

            {/* Image */}
            <img
              src={exam.image}
              alt={exam.title}
              className="w-16 h-16 mx-auto mb-4"
            />

            {/* Title */}
            <h2 className="text-lg font-semibold text-center">
              {exam.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm text-center mt-2">
              {exam.desc}
            </p>

            {/* Button */}
            <a
              href={exam.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 text-center py-2 rounded-full text-white font-semibold
              bg-gradient-to-r from-red-500 to-pink-500 
              hover:scale-105 transition-all duration-300"
            >
              Start Test →
            </a>

          </div>
        ))}

      </div>
    </div>
  );
}