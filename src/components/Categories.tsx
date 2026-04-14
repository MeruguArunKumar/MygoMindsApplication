import { motion } from 'motion/react';

const categories = [
  { 
    name: "Python Full Stack", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  { 
    name: "Salesforce", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
  },
  { 
    name: "Testing Tools", 
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
  },
  { 
    name: "UI/UX Design", 
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png"
  },
  { 
    name: "MERN Stack", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  { 
    name: "Azure DevOps", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
  }
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-subtitle">Categories</span>
          <h2 className="section-title">Explore Top Categories</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-brand-bg border border-gray-100 text-center hover:shadow-xl hover:shadow-brand-accent/5 transition-all cursor-pointer group"
            >
              
              {/* ✅ REAL LOGO */}
              <img 
                src={cat.icon} 
                alt={cat.name} 
                className="w-12 h-12 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform"
              />

              <h3 className="font-medium text-sm leading-tight">
                {cat.name}
              </h3>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}