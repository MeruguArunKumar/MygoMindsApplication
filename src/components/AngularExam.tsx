import { useNavigate } from "react-router-dom";
import { Globe, Code, Server, Database, Cloud } from "lucide-react";

export default function AngularRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-red-50 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Angular Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Step-by-step learning path to become an Angular Developer
          </p>
        </div>

        <div className="space-y-10">

          {/* TYPESCRIPT */}
    <Section
  icon={<Globe size={28} />}
  title="Angular Learning Path"
  items={[

    // TEST 1
    "Core Basics",
    "TypeScript Fundamentals",
    "Folder Structure",

    // TEST 2
    "Components",
    "Data Binding",

    // TEST 3
    "Directives",
    "Templates & View",
    "Pipes",

    // TEST 4
    "Component Communication",
    "Services & Dependency Injection",
    "Routing & Navigation",

    // TEST 5
    "Forms",
    "Reactive Forms",
    "Template-driven Forms",
    "HTTP & API Integration",
    "Lifecycle Hooks",

    // TEST 6
    "Advanced Concepts",
    "State Management (NgRx)",
    "RxJS",
  //  "Performance Optimization",
  //  "Testing",
   // "Deployment"
  ]}
  route="/angularexam-page"
  navigate={navigate}
/>
        </div>
      </div>
    </div>
  );
}

/* ✅ SAME SECTION COMPONENT */
function Section({ title, items, route, navigate, icon }: any) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* CONTENT */}
      <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-red-500">✔</span> {item}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => navigate(route)}
        className="mt-6 px-6 py-3 rounded-full text-white font-semibold 
        bg-gradient-to-r from-red-500 to-pink-500 
        hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Start Learning →
      </button>

    </div>
  );
}