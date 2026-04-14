import { useNavigate } from "react-router-dom";

export default function ExamsPage() {

  const navigate = useNavigate();

  const exams = [
    {
      title: ".NET Fullstack Test",
      course: ".NET Fullstack",
      date: "April 17, 2026",
      duration: "50 mins",
      route: "/dotnet-exam", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
    },
    {
      title: "Java Fullstack Assessment - 1",
      course: "Java Fullstack",
      date: "April 10, 2026",
      duration: "60 mins",
      route: "/java-exam",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      title: "Python Django Test",
      course: "Python Fullstack",
      date: "April 12, 2026",
      duration: "45 mins",
      route: "/python-exam",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      title: "AWS DevOps Quiz",
      course: "AWS DevOps",
      date: "April 15, 2026",
      duration: "30 mins",
      route: "/aws-exam",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    {
      title: "Power BI Evaluation",
      course: "Power BI",
      date: "April 18, 2026",
      duration: "50 mins",
      route: "/powerbi-exam",
      logo: "https://img.icons8.com/color/96/power-bi.png"
    }
  ];

  const handleStartExam = (route: string) => {
    if (!route) {
      alert("Exam page not available yet");
      return;
    }
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-20 px-4">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold 
          bg-gradient-to-r from-blue-600 to-indigo-600 
          bg-clip-text text-transparent">
            Online Exams Portal
          </h1>
          <p className="text-gray-600 mt-3">
            Access your scheduled exams and test your skills
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {exams.map((exam, index) => (
            <div
              key={index}
              className="relative bg-white/70 backdrop-blur-xl border border-white/40 
              rounded-3xl p-6 shadow-lg hover:shadow-2xl 
              hover:scale-[1.03] transition-all duration-300"
            >

              {/* LOGO */}
              <img
                src={exam.logo}
                alt={exam.course}
                className="absolute top-4 right-4 w-10 h-10 object-contain"
              />

              {/* COURSE */}
              <span className="text-xs font-semibold px-3 py-1 rounded-full 
              bg-blue-100 text-blue-600">
                {exam.course}
              </span>

              {/* TITLE */}
              <h2 className="text-xl font-bold mt-4 mb-4 text-gray-800">
                {exam.title}
              </h2>

              {/* DETAILS */}
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p>📅 <span className="font-medium">{exam.date}</span></p>
                <p>⏱ Duration: {exam.duration}</p>
              </div>

              {/* BUTTON */}
              <button
                onClick={() => handleStartExam(exam.route)}
                className="w-full py-3 rounded-full font-semibold text-white 
                bg-gradient-to-r from-blue-600 to-indigo-600 
                hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Start Exam
              </button>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}