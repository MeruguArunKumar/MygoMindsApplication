import { useNavigate } from "react-router-dom";
import { Code, Server, Globe, Database, Cloud } from "lucide-react";

export default function DotNetRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-purple-50 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            .NET Full Stack Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Step-by-step learning path to become a .NET Full Stack Developer
          </p>
        </div>

        <div className="space-y-10">

          {/*  C# FUNDAMENTALS */}
          <Section
            icon={<Code size={28} />}
            title=" C# Fundamentals"
            items={[
              "Variables & Data Types",
              "Operators",
              "Type Casting",
              "Conditional Statements",
              "Loops",
              "Arrays & Strings",
              "Methods & Functions",
              "OOP (Class, Inheritance, Polymorphism)",
              "Collections",
              "Generics",
              "Delegates & Events",
              "Exception Handling",
              "LINQ Basics"
            ]}
            route="/dotnet-topics"
            navigate={navigate}
          />

{/*  ASP.NET MVC (Full Syllabus - Classic) */}
<Section
  icon={<Server size={28} />}
   title=" ASP.NET MVC"
  items={[
    "Web Fundamentals",
    "MVC Architecture",
    "OOP Concepts (Foundation)",
    "Design Patterns",
    "Project & Folder Structure",
    "Controllers & Routing",
    "Views & Razor",
    "HTML Helpers & Extension Methods",
    "State Management",
    "Model Binding & Validation",
    "Entity Framework (EF)",
    "LINQ",
    "Filters",
    "Security, AJAX & Client Interaction",
    "Dependency Injection (Advanced)"
  ]}
  route="/dotnet-topic1"
  navigate={navigate}
/>
       

          {/* ASP.NET CORE MVC */}
<Section
  icon={<Globe size={28} />}
  title="ASP.NET Core MVC"
  items={[
    ".NET MVC vs .NET Core MVC",
    "Core Project Structure (Program.cs, appsettings.json)",
    "Built-in Dependency Injection (Service Collection, Lifetimes)",
    "Middleware Pipeline (Use, Run, Map)",
    "Controllers & Actions (Core flow)",
    "Routing (Endpoint, Attribute Routing)",
    "Model Binding (Core behavior)",
    "Tag Helpers (Razor UI binding)",
    "Filters (Execution pipeline)",
    "Entity Framework Core (Basics & Differences)"
  ]}
  route="/dotnet-topic2"
  navigate={navigate}
/>


 {/*  DATABASE + EF CORE */}
          <Section
            icon={<Database size={28} />}
            title=" EF,Entity Framework Core"
            items={[
              "ORM Concepts",
              "DbContext & DbSet",
              "Migrations",
              "CRUD Operations",
              "LINQ Queries",
              "Difference b/w EF,EFCore"
            ]}
            route="/dotnet-topic4"
            navigate={navigate}
          />



<Section
  icon={<Globe size={28} />}
  title="Microservices"
  items={[
    "Web API (Foundation) – API fundamentals, routing, controllers, DI, authentication",

    "Microservices Fundamentals",
    "Microservices Basics",
    "Monolithic vs Microservices",
    "Characteristics & Benefits",

    "Service Design + Communication",
    "Service Design Principles",
    "Database per Service",
    "Bounded Context",
    "REST, Messaging, Events",

    "API Layer",
    "API Controllers",
    "MVC vs API",
    "Dependency Injection",
    "Folder Structure",
    "Postman & Swagger",

    "API Gateway + Discovery",
    "API Gateway",
    "Routing & Aggregation",
    "Ocelot",
    "Service Discovery",

    "Data + Security",
    "Saga Pattern",
    "JWT, OAuth, CORS",
    "API Security",

    "Advanced Microservices",
    "Resilience (Polly)",
    "Logging & Monitoring",
    "Docker & Kubernetes",
    "CI/CD"
  ]}
  route="/dotnet-topic3"
  navigate={navigate}
/>
         
          {/*  FRONTEND 
          <Section
            icon={<Globe size={28} />}
            title=" Frontend (React / Angular)"
            items={[
              "HTML, CSS, JavaScript",
              "Bootstrap / Tailwind",
              "React Basics",
              "API Integration",
              "Forms & Validation"
            ]}
            route="/dotnet-exam-6"
            navigate={navigate}
          />

          {/*  DEPLOYMENT 
          <Section
            icon={<Cloud size={28} />}
            title=" Deployment & Tools"
            items={[
              "Git & GitHub",
              "Azure Deployment",
              "CI/CD Pipelines",
              "Docker Basics",
              "App Hosting"
            ]}
            route="/dotnet-exam-7"
            navigate={navigate}
          />
             */}
        </div>
      </div>
    </div>
  );
}

/* ✅ PROFESSIONAL SECTION CARD */
function Section({ title, items, route, navigate, icon }: any) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* CONTENT */}
      <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-purple-500">✔</span> {item}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => navigate(route)}
        className="mt-6 px-6 py-3 rounded-full text-white font-semibold 
        bg-gradient-to-r from-purple-500 to-indigo-500 
        hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Start Learning →
      </button>

    </div>
  );
}