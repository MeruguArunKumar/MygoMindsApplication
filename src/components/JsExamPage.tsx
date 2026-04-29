import { useParams } from "react-router-dom";

const examsData: any = {

  "js-topics": [

    {
      title: "Test-1",
      desc: "What is JS, Working, Uses",
      link: "https://online-test.classplusapp.com/?testId=69ec52765f9bcfe07e21c069&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/javascript.png",
    },
    {
      title: "Test-2",
      desc: "JS Folder Structure",
      link: "https://online-test.classplusapp.com/?testId=69ec53342f4e2b25ba320271&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/folder-invoices.png",
    },
    {
      title: "Test-3",
      desc: "Variables (var, let, const)",
      link: "https://online-test.classplusapp.com/?testId=69ec53cb8af583d819748b43&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/variable.png",
    },
    {
      title: "Test-4",
      desc: "Data Types",
      link: "https://online-test.classplusapp.com/?testId=69ec543dd96e859519c7c15f&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/data-configuration.png",
    },
    {
      title: "Test-5",
      desc: "Conditional Statements",
      link: "https://online-test.classplusapp.com/?testId=69ec54c29b034a171e2b22aa&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/decision.png",
    },
    {
      title: "Test-6",
      desc: "Loops",
      link: "https://online-test.classplusapp.com/?testId=69ec551d3f151d0c44aaa607&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/repeat.png",
    },
    {
      title: "Test-7",
      desc: "Break, Continue, Operators",
      link: "https://online-test.classplusapp.com/?testId=69ec5583eedfda37580186cf&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/calculator.png",
    },
    {
      title: "Test-8",
      desc: "Arrays & JSON",
      link: "https://online-test.classplusapp.com/?testId=69ec55d6d9b4d45d452c7278&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/list.png",
    },
    {
      title: "Test-9",
      desc: "JS Validations",
      link: "https://online-test.classplusapp.com/?testId=69ec563813494e0f4f359fb1&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/checked--v1.png",
    },
    {
      title: "Test-10",
      desc: "Functions (Declaration & Expression)",
      link: "https://online-test.classplusapp.com/?testId=69ec56a3d2f6689c4bfc8697&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/function.png",
    },
    {
      title: "Test-11",
      desc: "Types of Functions",
      link: "https://online-test.classplusapp.com/?testId=69ec57809b034a276b2b27b0&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/code.png",
    },
    {
      title: "Test-12",
      desc: "DOM & BOM",
      link: "https://online-test.classplusapp.com/?testId=69ec586d7556ad0e28fd6a85&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/web.png",
    },
    {
      title: "Test-13",
      desc: "DOM Traversal & Manipulation",
      link: "https://online-test.classplusapp.com/?testId=69ec58c65cc16003c67815c6&defaultLanguage=en-US",
      image: "https://img.icons8.com/color/96/dom.png",
    },

  ],
};

export default function JsTopicsPage() {
  const { topic } = useParams();

  const cleanTopic = topic?.toLowerCase().trim() || "js-topics";
  const exams = examsData[cleanTopic] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-yellow-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold 
        bg-gradient-to-r from-yellow-500 to-orange-500 
        bg-clip-text text-transparent">
          JavaScript Tests
        </h1>

        <p className="text-gray-500 mt-2">
          Practice and master JavaScript concepts
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

            <span className="absolute top-3 right-3 text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
              Test
            </span>

            <img
              src={exam.image}
              alt={exam.title}
              className="w-16 h-16 mx-auto mb-4"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://img.icons8.com/color/96/image.png")
              }
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
              bg-gradient-to-r from-yellow-500 to-orange-500 
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