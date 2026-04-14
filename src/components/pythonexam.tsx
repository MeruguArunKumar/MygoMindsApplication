import { useNavigate } from "react-router-dom";

export default function PythonExam() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-green-50 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold 
          bg-gradient-to-r from-blue-600 to-green-500 
          bg-clip-text text-transparent">
            Python Full Stack Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Master Python backend step-by-step and become industry ready
          </p>
        </div>

        <div className="space-y-10">

          <Section
            title="1. Python Fundamentals"
            items={[
              "Data Types and Variables",
              "Operators and Control Statements",
              "Functions and Modules",
              "Classes and Objects",
              "Inheritance",
              "Polymorphism",
              "Encapsulation",
              "Abstraction"
            ]}
            route="/python-exam-1"
            navigate={navigate}
            color="blue"
          />

          <Section
            title="2. Database (SQL)"
            items={[
              "SQL Basics",
              "CRUD Operations",
              "Joins and Relationships",
              "MySQL or PostgreSQL"
            ]}
            route="/python-exam-3"
            navigate={navigate}
            color="green"
          />

          <Section
            title="3. Django Framework"
            items={[
              "MVT Architecture",
              "Models Views Templates",
              "Forms and Authentication",
              "Django ORM"
            ]}
            route="/python-exam-4"
            navigate={navigate}
            color="green"
          />

          <Section
            title="4. REST APIs"
            items={[
              "Django REST Framework",
              "API Development",
              "JWT Authentication",
              "API Testing"
            ]}
            route="/python-exam-5"
            navigate={navigate}
            color="green"
          />

          <Section
            title="5. Deployment and Tools"
            items={[
              "Git and GitHub",
              "AWS Deployment",
              "Debugging",
              "Virtual Environments"
            ]}
            route="/python-exam-6"
            navigate={navigate}
            color="blue"
          />

        </div>
      </div>
    </div>
  );
}

/* ✅ REUSABLE COMPONENT */
function Section({ title, items, route, navigate, color }: any) {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-8 border-l-4 
    ${color === "green" ? "border-green-500" : "border-blue-600"}`}>

      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <ul className="grid md:grid-cols-2 gap-3 text-gray-700 text-sm">
        {items.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => navigate(route)}
        className={`mt-6 px-6 py-3 rounded-full text-white font-semibold 
        ${color === "green"
          ? "bg-gradient-to-r from-green-500 to-teal-500"
          : "bg-gradient-to-r from-blue-600 to-indigo-600"}
        hover:scale-105 hover:shadow-lg transition-all duration-300`}
      >
        Start Test →
      </button>

    </div>
  );
}