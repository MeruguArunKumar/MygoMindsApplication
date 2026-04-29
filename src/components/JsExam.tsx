import { useNavigate } from "react-router-dom";
import { Code, Globe, Server, Database, Cloud } from "lucide-react";

export default function JsRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-yellow-50 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            JavaScript Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Step-by-step learning path to become a JavaScript Developer
          </p>
        </div>

        <div className="space-y-10">

          {/* BASICS 
          <Section
            icon={<Code size={28} />}
            title="JavaScript Basics"
            items={[
              "Variables (var, let, const)",
              "Data Types",
              "Operators",
              "Type Conversion",
              "Conditional Statements",
              "Loops"
            ]}
            route="/js-topic/basics"
            navigate={navigate}
          />

          {/* FUNCTIONS 
          <Section
            icon={<Server size={28} />}
            title="Functions"
            items={[
              "Function Declaration",
              "Function Expression",
              "Arrow Functions",
              "Parameters & Return",
              "Scope (Global, Local)",
              "Closures"
            ]}
            route="/js-topic/functions"
            navigate={navigate}
          />

          {/* ARRAYS & OBJECTS 
          <Section
            icon={<Database size={28} />}
            title="Arrays & Objects"
            items={[
              "Arrays (map, filter, reduce)",
              "Objects & Properties",
              "Destructuring",
              "Spread & Rest",
              "JSON",
              "Object Methods"
            ]}
            route="/js-topic/arrays"
            navigate={navigate}
          />

          {/* DOM 
          <Section
            icon={<Globe size={28} />}
            title="DOM Manipulation"
            items={[
              "Selecting Elements",
              "Event Handling",
              "DOM Traversing",
              "Creating & Removing Elements",
              "Forms Handling",
              "Event Delegation"
            ]}
            route="/js-topic/dom"
            navigate={navigate}
          />

          {/* ASYNC JS 
          <Section
            icon={<Server size={28} />}
            title="Asynchronous JavaScript"
            items={[
              "Callbacks",
              "Promises",
              "Async / Await",
              "Fetch API",
              "Error Handling",
              "API Calls"
            ]}
            route="/js-topic/async"
            navigate={navigate}
          />

          {/* ES6+ 
          <Section
            icon={<Code size={28} />}
            title="ES6+ Features"
            items={[
              "Let & Const",
              "Arrow Functions",
              "Template Literals",
              "Modules (import/export)",
              "Default Parameters",
              "Optional Chaining"
            ]}
            route="/js-topic/es6"
            navigate={navigate}
          />

          {/* ADVANCED 
          <Section
            icon={<Cloud size={28} />}
            title="Advanced JavaScript"
            items={[
              "Execution Context",
              "Hoisting",
              "Event Loop",
              "Call Stack",
              "Memory Management",
              "Debounce & Throttle"
            ]}
            route="/js-topic/advanced"
            navigate={navigate}
          />

          {/* BROWSER + STORAGE 
          <Section
            icon={<Database size={28} />}
            title="Browser & Storage"
            items={[
              "LocalStorage",
              "SessionStorage",
              "Cookies",
              "Window Object",
              "History API",
              "Geolocation API"
            ]}
            route="/js-topic/browser"
            navigate={navigate}
          />

          {/* BEST PRACTICES 
          <Section
            icon={<Cloud size={28} />}
            title="Best Practices"
            items={[
              "Clean Code",
              "Error Handling",
              "Debugging",
              "Performance Optimization",
              "Security Basics",
              "Code Structure"
            ]}
            route="/js-topic/best"
            navigate={navigate}
          />
*/}

<Section
  icon={<Code size={28} />}
  title="JavaScript Learning Path"
  items={[
    // BASICS
    "Introduction (What is JS, Uses, Working)",
    "Project / Folder Structure",

    // CORE LANGUAGE
    "Variables (var, let, const)",
    "Data Types",
    "Operators",
    
    // CONTROL FLOW
    "Conditional Statements (if, switch)",
    "Loops (for, while, do...while)",
    "Break & Continue",

    // DATA STRUCTURES
    "Arrays & JSON",

    // FUNCTIONS
    "Functions (Declaration & Expression)",
    "Types of Functions",

    // DOM
    "DOM & BOM",
    "DOM Traversal & Manipulation",

    // VALIDATION
    "Form Validations"
  ]}
  route="/jsexam-page"
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
        <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* CONTENT */}
      <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-yellow-500">✔</span> {item}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => navigate(route)}
        className="mt-6 px-6 py-3 rounded-full text-white font-semibold 
        bg-gradient-to-r from-yellow-500 to-orange-500 
        hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Start Learning →
      </button>

    </div>
  );
}