const exams = [
  {
    title: "Variables and Methods 1",
    description: "Basics of C# variables, data types, and simple methods.",
    link: "https://online-test.classplusapp.com/?testId=69dcd46fe25d8b16e06eacd5&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/source-code.png",
  },
  {
    title: "Variables and Methods 2",
    description: "Intermediate concepts of variables and methods.",
    link: "https://online-test.classplusapp.com/?testId=69dcd4c16c7839e05b6409df&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/source-code.png",
  },
  {
    title: "Variables and Methods 3",
    description: "Advanced practice on variables and method logic.",
    link: "https://online-test.classplusapp.com/?testId=69dcd4e08ce6aa4b778d3b9a&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/source-code.png",
  },
  {
    title: "Class & Object",
    description: "Understand classes, objects, and their real-world usage.",
    link: "https://online-test.classplusapp.com/?testId=69dcd6a44b20a12a7365e57a&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/class.png",
  },
  {
    title: "Variables Test 2",
    description: "Practice problems focused on variable handling.",
    link: "https://online-test.classplusapp.com/?testId=69dcd502bfa9762d80038e74&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/variable.png",
  },
  {
  title: "Methods Test 1",
  description: "Test your understanding of defining and calling methods.",
  link: "https://online-test.classplusapp.com/?testId=69dcd3db68ecbc3845cf8a4e&defaultLanguage=en",
  image: "https://img.icons8.com/color/96/source-code.png",
},
{
  title: "Methods Test 2",
  description: "Advanced method-related problem solving.",
  link: "https://online-test.classplusapp.com/?testId=69dcd40405aff430893dd4fe&defaultLanguage=en",
  image: "https://img.icons8.com/color/96/source-code.png",
},
{
  title: "Methods Test 3",
  description: "Complex method execution and logic flow.",
  link: "https://online-test.classplusapp.com/?testId=69dcd429e25d8b8b066eacc5&defaultLanguage=en",
  image: "https://img.icons8.com/color/96/source-code.png",
},
{
  title: "Methods Test 4",
  description: "Expert-level method handling scenarios.",
  link: "https://online-test.classplusapp.com/?testId=69dcd43ebfa9761261038e49&defaultLanguage=en",
  image: "https://img.icons8.com/color/96/source-code.png",
},

  // ✅ FIXED HERE
  {
    title: "Constructors",
    description: "Learn about constructors and object initialization.",
    link: "https://online-test.classplusapp.com/?testId=69dcd4c16c7839e05b6409df&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/settings.png", // ✔ replaced
  },
  {
    title: "Abstraction Test 1",
    description: "Understand abstraction and abstract classes.",
    link: "https://online-test.classplusapp.com/?testId=69dcd7531312397b1913e6b0&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/layers.png", // ✔ replaced
  },
  {
    title: "Abstraction Test 2",
    description: "Advanced abstraction and interface concepts.",
    link: "https://online-test.classplusapp.com/?testId=69dcd789d9b62922b29668f8&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/layers.png", // ✔ replaced
  },
  {
    title: "Encapsulation Test 1",
    description: "Learn about data hiding and encapsulation.",
    link: "https://online-test.classplusapp.com/?testId=69dcd7b105aff48eaa3dd5bb&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/privacy.png",
  },
  {
    title: "Encapsulation Test 2",
    description: "Advanced encapsulation techniques.",
    link: "https://online-test.classplusapp.com/?testId=69dcd7d14fcc15773e877bfe&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/privacy.png",
  },
  {
    title: "Inheritance Test 1",
    description: "Understand inheritance and class hierarchy.",
    link: "https://online-test.classplusapp.com/?testId=69dcd7f67a7445964af8585b&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/flow-chart.png", // ✔ replaced
  },
  {
    title: "Polymorphism Test 1",
    description: "Learn method overriding and overloading.",
    link: "https://online-test.classplusapp.com/?testId=69dcd8484c553077464ae870&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/merge.png",
  },
  {
    title: "Polymorphism Test 2",
    description: "Advanced polymorphism concepts.",
    link: "https://online-test.classplusapp.com/?testId=69dcd86805aff46aac3dd694&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/merge.png",
  },
];

export default function DNExamone() {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">
        .NET Exam Series
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
              className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Start Exam
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}