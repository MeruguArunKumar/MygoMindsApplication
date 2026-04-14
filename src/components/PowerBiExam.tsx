import { useNavigate } from "react-router-dom";

export default function PowerBIExam() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-yellow-50 to-blue-50 py-20 px-4">
      
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-blue-600 bg-clip-text text-transparent">
            Power BI Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Master Data Analytics and Visualization
          </p>
        </div>

        <div className="space-y-10">

          <Section
            title="1. Data Fundamentals"
            items={[
              "Types of Data",
              "Data Cleaning",
              "Data Transformation",
              "Excel Basics"
            ]}
            route="/powerbi-exam-1"
            navigate={navigate}
            color="yellow"
          />

          <Section
            title="2. Power BI Basics"
            items={[
              "Power BI Interface",
              "Importing Data",
              "Data Modeling",
              "Relationships"
            ]}
            route="/powerbi-exam-2"
            navigate={navigate}
            color="yellow"
          />

          <Section
            title="3. Data Visualization"
            items={[
              "Charts and Graphs",
              "Dashboards",
              "Filters and Slicers",
              "Drill Down Reports"
            ]}
            route="/powerbi-exam-3"
            navigate={navigate}
            color="blue"
          />

          <Section
            title="4. DAX (Data Analysis Expressions)"
            items={[
              "Calculated Columns",
              "Measures",
              "Basic Functions",
              "Time Intelligence"
            ]}
            route="/powerbi-exam-4"
            navigate={navigate}
            color="blue"
          />

          <Section
            title="5. Reports and Publishing"
            items={[
              "Report Creation",
              "Dashboard Sharing",
              "Power BI Service",
              "Data Refresh"
            ]}
            route="/powerbi-exam-5"
            navigate={navigate}
            color="yellow"
          />

        </div>

      </div>
    </div>
  );
}

/* ✅ REUSABLE SECTION */
function Section({ title, items, route, navigate, color }: any) {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-8 border-l-4 
    ${color === "blue" ? "border-blue-500" : "border-yellow-500"}`}>

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
        ${color === "blue"
          ? "bg-gradient-to-r from-blue-500 to-indigo-500"
          : "bg-gradient-to-r from-yellow-500 to-orange-500"}
        hover:scale-105 hover:shadow-lg transition-all duration-300`}
      >
        Start Test →
      </button>

    </div>
  );
}