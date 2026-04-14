import { useNavigate } from "react-router-dom";

export default function AwsExam() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-orange-50 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold 
          bg-gradient-to-r from-blue-600 to-orange-500 
          bg-clip-text text-transparent">
            AWS DevOps Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Master Cloud & DevOps and become deployment-ready
          </p>
        </div>

        <div className="space-y-10">

          <Section
            title="1. Linux & Basics"
            items={[
              "Linux Commands",
              "File System & Permissions",
              "Shell Scripting",
              "Networking Basics"
            ]}
            route="/aws-exam-1"
            navigate={navigate}
            color="blue"
          />

          <Section
            title="2. Version Control (Git)"
            items={[
              "Git Basics",
              "Branching & Merging",
              "GitHub / GitLab",
              "Pull Requests"
            ]}
            route="/aws-exam-2"
            navigate={navigate}
            color="blue"
          />

          <Section
            title="3. AWS Cloud Services"
            items={[
              "EC2 (Virtual Servers)",
              "S3 (Storage)",
              "IAM (Access Control)",
              "VPC (Networking)",
              "Load Balancer",
              "CloudWatch"
            ]}
            route="/aws-exam-3"
            navigate={navigate}
            color="orange"
          />

          <Section
            title="4. CI/CD Pipelines"
            items={[
              "Jenkins",
              "GitHub Actions",
              "Build Automation",
              "Deployment Pipelines"
            ]}
            route="/aws-exam-4"
            navigate={navigate}
            color="orange"
          />

          <Section
            title="5. Containers & Orchestration"
            items={[
              "Docker",
              "Docker Images & Containers",
              "Kubernetes Basics",
              "Container Deployment"
            ]}
            route="/aws-exam-5"
            navigate={navigate}
            color="blue"
          />

          <Section
            title="6. Monitoring & Deployment"
            items={[
              "Monitoring Tools",
              "Logging Systems",
              "Auto Scaling",
              "Deployment Strategies"
            ]}
            route="/aws-exam-6"
            navigate={navigate}
            color="blue"
          />

        </div>
      </div>
    </div>
  );
}

/* ✅ REUSABLE SECTION COMPONENT */
function Section({ title, items, route, navigate, color }: any) {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-8 border-l-4 
    ${color === "orange" ? "border-orange-500" : "border-blue-600"}`}>

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
        ${color === "orange"
          ? "bg-gradient-to-r from-orange-500 to-red-500"
          : "bg-gradient-to-r from-blue-600 to-indigo-600"}
        hover:scale-105 hover:shadow-lg transition-all duration-300`}
      >
        Start Test →
      </button>

    </div>
  );
}