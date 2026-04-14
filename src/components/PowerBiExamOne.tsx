const exams = [
  {
    title: "Types of Data",
    description: "Test your understanding of different data types used in Power BI and analytics.",
    link: "https://your-classplus-link.com/powerbi-exam1",
    image: "https://img.icons8.com/color/96/database.png",
  },
  {
    title: "Data Cleaning",
    description: "Evaluate your skills in cleaning, filtering, and preparing raw data.",
    link: "https://your-classplus-link.com/powerbi-exam2",
    image: "https://img.icons8.com/color/96/broom.png",
  },
  {
    title: "Data Transformation",
    description: "Practice transforming data using Power Query and shaping datasets.",
    link: "https://your-classplus-link.com/powerbi-exam3",
    image: "https://img.icons8.com/color/96/data-configuration.png",
  },
  {
    title: "Excel Basics",
    description: "Test your foundational Excel knowledge for data analysis and Power BI integration.",
    link: "https://your-classplus-link.com/powerbi-exam4",
    image: "https://img.icons8.com/color/96/microsoft-excel-2019.png",
  },
];

export default function PowerBiExamOne() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">

      <h1 className="text-3xl font-bold text-center mb-10">
        Power BI Exam Series
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {exams.map((exam, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
          >
            <a href={exam.link} target="_blank" rel="noopener noreferrer">
              <img
                src={exam.image}
                alt={exam.title}
                className="w-16 h-16 mb-4 mx-auto"
              />
            </a>

            <h2 className="text-xl font-semibold text-center mb-2">
              {exam.title}
            </h2>

            <p className="text-gray-600 text-sm text-center">
              {exam.description}
            </p>

            <a
              href={exam.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
            >
              Start Exam
            </a>
          </div>
        ))}

      </div>
    </div>
  );
}