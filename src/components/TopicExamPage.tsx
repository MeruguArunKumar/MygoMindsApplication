import { useParams } from "react-router-dom";

const examsByTopic: any = {

  /* ================= VARIABLES ================= */
  "variables-datatypes": [
    {
      title: "Variables Test 1",
      desc: "Basics of variables & data types",
      link: "https://online-test.classplusapp.com/?testId=69f04071fcc661f21f5b3e11&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/variable.png",
    },
    {
      title: "Variables Test 2",
      desc: "Practice on variable handling",
      link: "https://online-test.classplusapp.com/?testId=69dcd502bfa9762d80038e74&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/variable.png",
    },
  ],

  /* ================= OPERATORS ================= */
  operators: [
    {
      title: "Operators Test",
      desc: "Arithmetic & logical operators",
      link: "https://online-test.classplusapp.com/?testId=69de13e57921de2e0827eb68&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/calculator.png",
    },
  ],

  /* ================= TYPE CASTING ================= */
  typecasting: [
    {
      title: "Type Casting Test",
      desc: "Implicit & explicit casting",
      link: "https://online-test.classplusapp.com/?testId=69de14615a7a06f39f517903&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/synchronize.png",
    },
  ],

  /* ================= CONDITIONS ================= */
  conditionals: [
    {
      title: "Condition Test",
      desc: "If-else and switch statements",
      link: "https://online-test.classplusapp.com/?testId=69de14afb4d7a6771d3e96dd&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/decision.png",
    },
  ],

  /* ================= LOOPS ================= */
  loops: [
    {
      title: "Loops Concept Test 1",
      desc: "Loop basics",
      link: "https://online-test.classplusapp.com/?testId=69dcdcd0b392b8de4d97e58a&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/repeat.png",
    },
    {
      title: "Loops Concept Test 2",
      desc: "Advanced looping",
      link: "https://online-test.classplusapp.com/?testId=69dcdd114bf262197c9e428a&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/repeat.png",
    },
    {
      title: "Loops Code Test",
      desc: "Code-based loop problems",
      link: "https://online-test.classplusapp.com/?testId=69dce06f62de93680692acf1&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/repeat.png",
    },
  ],

  /* ================= ARRAYS ================= */
  arrays: [
    {
      title: "Arrays Concept 1",
      desc: "Array basics",
      link: "https://online-test.classplusapp.com/?testId=69dce0dcb94ed1be3666d4c2&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/grid.png",
    },
    {
      title: "Arrays Concept 2",
      desc: "Intermediate arrays",
      link: "https://online-test.classplusapp.com/?testId=69dce10744a5b8b78c1e50f6&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/grid.png",
    },
    {
      title: "Arrays Concept 3",
      desc: "Advanced arrays",
      link: "https://online-test.classplusapp.com/?testId=69dce14cc835a857bd7c4b17&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/grid.png",
    },
    {
      title: "Arrays Code 1",
      desc: "Coding problems",
      link: "https://online-test.classplusapp.com/?testId=69dce18b7a7445d817f86091&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/grid.png",
    },
    {
      title: "Arrays Code 2",
      desc: "Advanced coding",
      link: "https://online-test.classplusapp.com/?testId=69dce202b94ed1c78366d97f&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/grid.png",
    },
    {
      title: "Arrays Code 3",
      desc: "Practice set",
      link: "https://online-test.classplusapp.com/?testId=69dce1c53dee465e0a47a9f2&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/grid.png",
    },
    {
      title: "Arrays Code 4",
      desc: "Expert level",
      link: "https://online-test.classplusapp.com/?testId=69dce22d4bf262a3c49e4927&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/grid.png",
    },
  ],
strings: [
  {
    title: "Strings Concept 1",
    desc: "Introduction to strings",
    link: "https://online-test.classplusapp.com/?testId=69df716985b652d5bbc07add&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/abc.png",
  },
  {
    title: "Strings Concept 2",
    desc: "Functions in strings (ex: ToUpper())",
    link: "https://online-test.classplusapp.com/?testId=69df71bb44a5b81f2120131d&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/abc.png",
  },
  {
    title: "Strings Concept 3",
    desc: "Find/Search methods in strings",
    link: "https://online-test.classplusapp.com/?testId=69df71ec8bbd86437a5abcae&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/abc.png",
  },
  {
    title: "Strings Code 1",
    desc: "Code based string problems",
    link: "https://online-test.classplusapp.com/?testId=69df721fbdbc62306d06e07a&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/abc.png",
  },
],

  /* ================= METHODS ================= */
  methods: [
    {
      title: "Methods Test 1",
      desc: "Basic methods",
      link: "https://online-test.classplusapp.com/?testId=69dcd3db68ecbc3845cf8a4e&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/source-code.png",
    },
    {
      title: "Methods Test 2",
      desc: "Intermediate methods",
      link: "https://online-test.classplusapp.com/?testId=69dcd40405aff430893dd4fe&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/source-code.png",
    },
    {
      title: "Methods Test 3",
      desc: "Advanced methods",
      link: "https://online-test.classplusapp.com/?testId=69dcd429e25d8b8b066eacc5&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/source-code.png",
    },
    {
      title: "Methods Test 4",
      desc: "Expert level",
      link: "https://online-test.classplusapp.com/?testId=69dcd43ebfa9761261038e49&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/source-code.png",
    },
  ],
  /* ================= OOPS ================= */
oops: [
  {
    title: "Basic OOPS",
    desc: "Core OOPS fundamentals",
    link: "https://online-test.classplusapp.com/?testId=69dcd67979af990562c8b905&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/class.png",
  },
  {
    title: "Class & Object",
    desc: "Understand classes and objects",
    link: "https://online-test.classplusapp.com/?testId=69dcd6a44b20a12a7365e57a&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/class.png",
  },
  {
    title: "Constructors",
    desc: "Object initialization",
    link: "https://online-test.classplusapp.com/?testId=69dcd4c16c7839e05b6409df&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/settings.png",
  },

  /* ===== ENCAPSULATION ===== */
  {
    title: "Encapsulation Test 1",
    desc: "Data hiding concepts",
    link: "https://online-test.classplusapp.com/?testId=69dcd7b105aff48eaa3dd5bb&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/privacy.png",
  },
  {
    title: "Encapsulation Test 2",
    desc: "Advanced encapsulation",
    link: "https://online-test.classplusapp.com/?testId=69dcd7d14fcc15773e877bfe&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/privacy.png",
  },

  /* ===== INHERITANCE ===== */
  {
    title: "Inheritance Test 1",
    desc: "Class hierarchy basics",
    link: "https://online-test.classplusapp.com/?testId=69dcd7f67a7445964af8585b&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/flow-chart.png",
  },
  {
    title: "Inheritance Test 2",
    desc: "Advanced inheritance",
    link: "https://online-test.classplusapp.com/?testId=69dcd816b94ed1545866d1ec&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/flow-chart.png",
  },

  /* ===== POLYMORPHISM ===== */
  {
    title: "Polymorphism Test 1",
    desc: "Overloading & overriding",
    link: "https://online-test.classplusapp.com/?testId=69dcd8484c553077464ae870&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/merge.png",
  },
  {
    title: "Polymorphism Test 2",
    desc: "Advanced polymorphism",
    link: "https://online-test.classplusapp.com/?testId=69dcd86805aff46aac3dd694&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/merge.png",
  },

  /* ===== ABSTRACTION ===== */
  {
    title: "Abstraction Test 1",
    desc: "Abstract classes",
    link: "https://online-test.classplusapp.com/?testId=69dcd7531312397b1913e6b0&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/layers.png",
  },
  {
    title: "Abstraction Test 2",
    desc: "Interfaces",
    link: "https://online-test.classplusapp.com/?testId=69dcd789d9b62922b29668f8&defaultLanguage=en",
    image: "https://img.icons8.com/color/96/layers.png",
  },
],
  /* ================= COLLECTIONS ================= */
  collections: [
    {
      title: "Collections Test",
      desc: "List, Dictionary basics",
      link: "https://online-test.classplusapp.com/?testId=69de154d4aed9e573c90f9b1&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/database.png",
    },
  ],

  /* ================= GENERICS ================= */
  generics: [
    {
      title: "Generics Test",
      desc: "Generic classes & methods",
      link: "https://online-test.classplusapp.com/?testId=69de15a07f465857080d2186&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/settings.png",
    },
  ],

  /* ================= DELEGATES ================= */
  delegates: [
    {
      title: "Delegates Test",
      desc: "Delegates & events",
      link: "https://online-test.classplusapp.com/?testId=69de1826407c6665f5463ee7&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/connection-status-on.png",
    },
  ],

  /* ================= ADVANCED ================= */
  "advanced-csharp": [
    {
      title: "LINQ",
      desc: "LINQ & advanced topics",
      link: "https://online-test.classplusapp.com/?testId=69de15fd334c1a07ffc01fe1&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/rocket.png",
    },
    {
      title: "Dependency Injection",
      desc: "DI concepts",
      link: "https://online-test.classplusapp.com/?testId=69de15fd334c1a07ffc01fe1&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/rocket.png",
    },
    {
      title: "Async Programming",
      desc: "Async & Await",
      link: "https://online-test.classplusapp.com/?testId=69de15fd334c1a07ffc01fe1&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/rocket.png",
    },
     {
      title: "Advanced C#",
      desc: "All topics level1",
      link: "https://online-test.classplusapp.com/?testId=69de2cc2b25cd586792b45cd&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/rocket.png",
    },
     {
     title: "Advanced C#",
      desc: "All topics leve2",
      link: "https://online-test.classplusapp.com/?testId=69de2d2aac2b77a42a0576bc&defaultLanguage=en",
      image: "https://img.icons8.com/color/96/rocket.png",
    },
     {
     title: "Advanced C#",
      desc: "All topics level3",
      link: "",
      image: "https://img.icons8.com/color/96/rocket.png",
    },
  ],

};
export default function TopicExamPage() {
  const { topic } = useParams();
  const exams = examsByTopic[topic as string] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-purple-50 px-6 py-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold capitalize 
        bg-gradient-to-r from-purple-500 to-indigo-500 
        bg-clip-text text-transparent">
          {topic} Tests
        </h1>

        <p className="text-gray-500 mt-2">
          Practice and master {topic}
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

              {/* LEVEL BADGE */}
              <span className="absolute top-3 right-3 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                Test
              </span>

              {/* IMAGE */}
              <img
                src={exam.image}
                alt={exam.title}
                className="w-16 h-16 mx-auto mb-4"
              />

              {/* TITLE */}
              <h2 className="text-lg font-semibold text-center">
                {exam.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm text-center mt-2">
                {exam.desc}
              </p>

              {/* BUTTON */}
              <a
                href={exam.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center py-2 rounded-full text-white font-semibold
                bg-gradient-to-r from-purple-500 to-indigo-500 
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