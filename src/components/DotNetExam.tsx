import { useNavigate } from "react-router-dom";

export default function DotNetRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-purple-50 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold 
          bg-gradient-to-r from-purple-500 to-indigo-500 
          bg-clip-text text-transparent">
            .NET Full Stack Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Master .NET backend and full stack development step-by-step
          </p>
        </div>

        <div className="space-y-10">

          {/* SECTION 1 */}
          <Section
            title="1. C# Fundamentals"
            items={[
              "Data Types and Variables",
              "Control Statements",
              "Arrays and Strings",
              "OOP Concepts",
              "Polymorphism and Abstraction",
              "Exception Handling",
              "Collections",
              "LINQ Basics"
            ]}
            route="/Dotneexam1"
            navigate={navigate}
          />

          {/* SECTION 2 */}
          <Section
            title="2. .NET Core Basics"
            items={[
              ".NET Architecture",
              "CLR and Runtime",
              "Project Structure",
              "Dependency Injection",
              "Middleware"
            ]}
            route="/dotnet-exam-2"
            navigate={navigate}
          />

          {/* SECTION 3 */}
          <Section
            title="3. ASP.NET Core"
            items={[
              "MVC Architecture",
              "Controllers",
              "Views",
              "Model Binding",
              "Validation"
            ]}
            route="/dotnet-exam-3"
            navigate={navigate}
          />

          {/* SECTION 4 */}
          <Section
            title="4. Web APIs"
            items={[
              "REST APIs",
              "HTTP Methods",
              "Swagger",
              "Authentication",
              "JWT"
            ]}
            route="/dotnet-exam-4"
            navigate={navigate}
          />

          {/* SECTION 5 */}
          <Section
            title="5. Entity Framework"
            items={[
              "ORM Concepts",
              "DbContext",
              "Migrations",
              "CRUD",
              "LINQ Queries"
            ]}
            route="/dotnet-exam-5"
            navigate={navigate}
          />

          {/* SECTION 6 */}
          <Section
            title="6. Frontend Integration"
            items={[
              "HTML CSS JS",
              "Bootstrap",
              "React Integration",
              "API Consumption"
            ]}
            route="/dotnet-exam-6"
            navigate={navigate}
          />

          {/* SECTION 7 */}
          <Section
            title="7. Deployment & Tools"
            items={[
              "Visual Studio",
              "Git",
              "Azure",
              "CI/CD"
            ]}
            route="/dotnet-exam-7"
            navigate={navigate}
          />

        </div>
      </div>
    </div>
  );
}

/* ✅ REUSABLE SECTION COMPONENT */
function Section({ title, items, route, navigate }: any) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-purple-500">

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
        bg-gradient-to-r from-purple-500 to-indigo-500 
        hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Start Test →
      </button>

    </div>
  );
}