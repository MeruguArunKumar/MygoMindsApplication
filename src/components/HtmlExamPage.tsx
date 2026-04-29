import { useParams } from "react-router-dom";

const examsData: any = {
  "html-topics": [

    {
      title: "Test-1",
      desc: "Introduction to Web",
      link: "https://online-test.classplusapp.com/?testId=69f09efca2be3846d8b00674&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/internet.png",
    },

    {
      title: "Test-2",
      desc: "Introduction + Basic Tags",
      link: "https://online-test.classplusapp.com/?testId=69f096756770420e55263431&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/code.png",
    },

    {
      title: "Test-3",
      desc: "Text Formatting + Lists",
      link: "https://online-test.classplusapp.com/?testId=69f096a3ce92fc7b4fe9b513&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/edit.png",
    },

    {
      title: "Test-4",
      desc: "Links + Images",
      link: "https://online-test.classplusapp.com/?testId=69f096cd5f16d71abcc57beb&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/link.png",
    },

    {
      title: "Test-5",
      desc: "Tables + Layout (div, span, block vs inline)",
      link: "https://online-test.classplusapp.com/?testId=69f096f1c140abd6505ecca1&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/table.png",
    },

    {
      title: "Test-6",
      desc: "Forms (inputs, radio, checkbox, dropdown)",
      link: "https://online-test.classplusapp.com/?testId=69f09719eb93f956e98d5b1b&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/form.png",
    },

    {
      title: "Test-7",
      desc: "Semantic Tags + Media (audio, video)",
      link: "https://online-test.classplusapp.com/?testId=69f0974c2561de0ac129d0ac&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/video.png",
    },

  ],
};

export default function HtmlTopics() {
  const { topic } = useParams();

  const exams = examsData["html-topics"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-orange-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold 
        bg-gradient-to-r from-orange-500 to-red-500 
        bg-clip-text text-transparent">
          HTML Tests
        </h1>

        <p className="text-gray-500 mt-2">
          Practice and master HTML step-by-step 
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {exams.map((exam: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md 
            hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >

            <span className="absolute top-3 right-3 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
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
              bg-gradient-to-r from-orange-500 to-red-500 
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