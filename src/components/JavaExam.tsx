import { useNavigate } from "react-router-dom";

export default function JavaRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-orange-50 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold 
          bg-gradient-to-r from-orange-500 to-red-500 
          bg-clip-text text-transparent">
            Java Full Stack Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Master Java backend step-by-step and become industry ready
          </p>
        </div>

        <div className="space-y-10">

          <Section
            title="1. Core Java (Foundation)"
            items={[
              "Data Types and Variables",
              "Operators and Control Statements",
              "Arrays and Strings",
              "OOP Concepts",
              "Abstraction and Encapsulation",
              "Exception Handling",
              "Collections",
              "Multithreading",
              "File Handling"
            ]}
            route="/java-exam-1"
            navigate={navigate}
          />

          <Section
            title="2. JDBC (Database Connectivity)"
            items={[
              "DriverManager and Connection",
              "Statement vs PreparedStatement",
              "ResultSet Handling",
              "CRUD Operations",
              "Transactions",
              "Batch Processing"
            ]}
            route="/java-exam-2"
            navigate={navigate}
          />

          <Section
            title="3. Servlets (Backend Logic)"
            items={[
              "Servlet Lifecycle",
              "doGet vs doPost",
              "Request and Response",
              "Session Management",
              "RequestDispatcher",
              "Filters and Listeners"
            ]}
            route="/java-exam-3"
            navigate={navigate}
          />

          <Section
            title="4. JSP (View Layer)"
            items={[
              "JSP Lifecycle",
              "Expression Language",
              "JSTL",
              "MVC Integration"
            ]}
            route="/java-exam-4"
            navigate={navigate}
          />

          <Section
            title="5. MVC Architecture"
            items={[
              "Model Layer",
              "View Layer",
              "Controller Layer"
            ]}
            route="/java-exam-5"
            navigate={navigate}
          />

          <Section
            title="6. Spring Framework"
            items={[
              "IoC",
              "Dependency Injection",
              "Bean Lifecycle",
              "ApplicationContext"
            ]}
            route="/java-exam-6"
            navigate={navigate}
          />

        </div>
      </div>
    </div>
  );
}

/* ✅ REUSABLE COMPONENT */
function Section({ title, items, route, navigate }: any) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-orange-500">

      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
        {items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => navigate(route)}
        className="mt-6 px-6 py-3 rounded-full text-white font-semibold 
        bg-gradient-to-r from-orange-500 to-red-500 
        hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Start Test →
      </button>

    </div>
  );
}