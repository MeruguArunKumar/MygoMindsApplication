import { useNavigate } from "react-router-dom";

export default function ExamsPage() {
  const navigate = useNavigate();

  const fullstackCourses = [
    {
      title: ".NET Fullstack",
      desc: "Master C#, ASP.NET Core, Entity Framework, and modern Front-end development.",
      route: "/dotnet-exam",
      image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776237666/Dotnet_azyxug.png"
    },
   {
  title: "Java Fullstack",
  desc: "Build enterprise apps using Spring Boot, Microservices, and React.",
  route: "/java-exam",
  image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776248156/Java_fn68sx.png"
},
{
  title: "Python Fullstack",
  desc: "Learn Django, Flask, APIs, and frontend integration.",
  route: "/python-exam",
  image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776256445/Python_3_kdn4me.png"
},

  ];

  const cloudCourses = [
  {
    title: "Azure DevOps",
    desc: "Learn Azure cloud services, DevOps pipelines, deployment, and monitoring.",
    route: "/azure-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776253970/Azure_1_aqoqfx.png"
  },
  {
    title: "AWS DevOps",
    desc: "Master CI/CD, Docker, Kubernetes, and AWS cloud deployment.",
    route: "/aws-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776253970/Aws_1_iwkaud.png"
  }
  
];

  const frontendCourses = [
  {
    title: "HTML",
    desc: "Learn structure of web pages using semantic HTML5 elements.",
    route: "/html-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776253970/Html_1_q4qv0g.png"
  },
  {
    title: "CSS",
    desc: "Design responsive and modern UI using CSS3, Flexbox, and Grid.",
    route: "/css-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776253970/Css_1_y0nnoy.png"
  },
  {
    title: "JavaScript",
    desc: "Master core JavaScript, DOM manipulation, and ES6 concepts.",
    route: "/javascript-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776250961/Js_tqd3vx.png"
  },
  {
    title: "Bootstrap",
    desc: "Build responsive websites quickly using Bootstrap framework.",
    route: "/bootstrap-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776250960/Bootstrap_lk4i1d.png"
  },
   {
    title: "Angular",
    desc: "Build dynamic single-page applications using Angular framework.",
    route: "/angular-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776332562/Angular_e2zu6f.png"
  },
  {
    title: "React",
    desc: "Create interactive UI components using React library.",
    route: "/react-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776332566/React_w5l8ju.png"
  }
];

  const databaseCourses = [
  {
    title: "SQL Server",
    desc: "Learn Microsoft SQL Server, queries, stored procedures, and optimization.",
    route: "/sqlserver-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776256445/Sqlserver_nlsawj.png"
  },
  {
    title: "Oracle",
    desc: "Understand Oracle DB concepts, PL/SQL, and enterprise database systems.",
    route: "/oracle-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776256445/Oracle_osewlm.png"
  },
  {
    title: "MySQL",
    desc: "Work with MySQL database, joins, indexing, and CRUD operations.",
    route: "/mysql-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776256445/Mysql_biqkxi.png"
  },
  {
    title: "MongoDB",
    desc: "Learn NoSQL database concepts, collections, and document-based storage.",
    route: "/mongodb-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776256445/Mongodb_fnmy8e.png"
  }
];
const dataCourses = [
 {
    title: "Power BI",
    desc: "Learn dashboards, data modeling, and business analytics.",
    route: "/powerbi-exam",
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776253970/PowerBi_1_xm6fer.png"
  }
];
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 py-20 px-4">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold">
          <span className="text-[#0B3C5D]">Mygominds</span>{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Online Exams Portal
          </span>
        </h1>

        <p className="text-gray-600 mt-3 text-lg">
          Learn • Practice • Test your skills
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">

        {/* ================= FULLSTACK ================= */}
<SectionTitle title="Full-stack Technologies" />

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {fullstackCourses.map((course, index) => (
    <Card key={index} course={course} navigate={navigate} />
  ))}
</div>



{/* ================= FRONTEND ================= */}
<SectionTitle title="Front-End " />

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {frontendCourses.map((course, index) => (
    <Card key={index} course={course} navigate={navigate} />
  ))}
</div>

{/* ================= DATABASE ================= */}
<SectionTitle title="Database" />

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {databaseCourses.map((course, index) => (
    <Card key={index} course={course} navigate={navigate} />
  ))}  
</div>
    {/* ================= CLOUD ================= */}
<SectionTitle title="Cloud " />

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {cloudCourses.map((course, index) => (
    <Card key={index} course={course} navigate={navigate} />
  ))}
</div>  
{/* ================= DATA ANALYTICS ================= */}
<SectionTitle title="Data Analytics & Business Intelligence" />

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {dataCourses.map((course, index) => (
    <Card key={index} course={course} navigate={navigate} />
  ))}
</div>
      </div>

    </div>
  );
}

/*  SECTION TITLE */
function SectionTitle({ title }: any) {
  return (
    <h2 className="text-2xl font-bold text-[#0B3C5D] border-l-4 border-orange-500 pl-4">
      {title}
    </h2>
  );
}

/*  FULL CARD */
function Card({ course, navigate }: any) {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-xl 
      hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold">
          {course.title}
        </h2>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm mb-6">{course.desc}</p>

        <button
          onClick={() => navigate(course.route)}
          className="w-full py-3 rounded-full font-semibold text-white 
          bg-gradient-to-r from-indigo-600 to-purple-600 
          hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Start Learning →
        </button>
      </div>
    </div>
  );
}

/*  SIMPLE GRID (Frontend + DB) */
function SimpleGrid({ courses }: any) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courses.map((item: any, index: number) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 text-center shadow-md 
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          <h3 className="font-semibold text-gray-700">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}