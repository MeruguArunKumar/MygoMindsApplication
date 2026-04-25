import { motion } from "framer-motion";

export default function TopBanner() {
  const courses = [
    {
      name: ".NET",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
    },
    {
      name: "Java",
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      name: "Python",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "AWS DevOps",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Power BI",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    },
    {
      name: "Generative AI",
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    },
  ];

  return (
    <div className="w-full">

      {/* TOP BANNER */}
      <div className="bg-brand-primary text-white overflow-hidden border-b border-white/10 relative">
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-brand-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-brand-primary to-transparent z-10" />

        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-24 py-5 text-base md:text-lg font-semibold tracking-wide"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="flex items-center gap-4">
                 MyGo Minds
                <span className="text-brand-accent font-bold text-lg md:text-xl">
                  100% Placement Assistance
                </span>
                 Learn • Build • Get Hired
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* COURSE BANNER */}
      <div className="relative overflow-hidden border-b border-gray-200 bg-white/80 backdrop-blur-md">

        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-80" />

        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex whitespace-nowrap relative z-20">
          <motion.div
            className="flex gap-10 py-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex gap-6 items-center">

                {courses.map((course, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-2 rounded-full 
                               bg-white/90 backdrop-blur-lg 
                               border border-gray-200/60 
                               shadow-sm hover:shadow-md 
                               transition-all duration-300
                               whitespace-nowrap"  // 🔥 IMPORTANT
                    
                    whileHover={{ y: -2, scale: 1.04 }}
                  >
                    {/* ICON */}
                    <img
                      src={course.img}
                      alt={course.name}
                      className="w-4 h-4 object-contain flex-shrink-0"
                    />

                    {/* TEXT */}
                    <span className="text-sm font-medium text-gray-700">
                      {course.name}
                    </span>
                  </motion.div>
                ))}

              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </div>
  );
}