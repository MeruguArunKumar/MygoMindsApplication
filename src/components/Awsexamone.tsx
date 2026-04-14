const exams = [
  {
    title: "Linux Commands",
    description: "Test your knowledge of basic and advanced Linux commands used in AWS environments.",
    link: "https://your-classplus-link.com/aws-exam1",
    image: "https://img.icons8.com/color/96/console.png",
  },
  {
    title: "File System & Permissions",
    description: "Evaluate your understanding of file systems, ownership, and permission management.",
    link: "https://your-classplus-link.com/aws-exam2",
    image: "https://img.icons8.com/color/96/folder-invoices.png",
  },
  {
    title: "Shell Scripting",
    description: "Practice writing shell scripts, variables, loops, and automation tasks.",
    link: "https://your-classplus-link.com/aws-exam3",
    image: "https://img.icons8.com/color/96/script.png",
  },
  {
    title: "Networking Basics",
    description: "Test your knowledge of IP addressing, DNS, ports, and networking concepts in AWS.",
    link: "https://your-classplus-link.com/aws-exam4",
    image: "https://img.icons8.com/color/96/network.png",
  },
];

export default function AwsExamOne() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">

      <h1 className="text-3xl font-bold text-center mb-10">
        AWS & Linux Exam Series
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
              className="block mt-4 text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Start Exam
            </a>
          </div>
        ))}

      </div>
    </div>
  );
}