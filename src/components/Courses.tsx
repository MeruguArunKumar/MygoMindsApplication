import { motion } from 'motion/react';
import { Star, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Course = {
  id: number;
  title: string;
  route?: string;
  category: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  instructor: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Java Fullstack Development",
    route: "/java-fullstack",
    category: "Development",
    duration: "90 Days",
    rating: 4.9,
    reviews: 128,
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775204980/Top_Tips_for_Passing_the_Java_Certification_Exam_ndhh99.jpg",
    instructor: "Real Time Expert"
  },
  {
    id: 2,
    title: "Python Fullstack with Django",
    route: "/python-fullstack",
    category: "Development",
    duration: "6 Months",
    rating: 4.8,
    reviews: 95,
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775204876/Python_Programming_language_s2ctkj.jpg",
    instructor: "Arun Sir"
  },
  {
    id: 3,
    title: "AWS DevOps Engineering",
    route: "/aws-devops",
    category: "Cloud",
    duration: "2 Months",
    rating: 5.0,
    reviews: 210,
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775205097/We_are_implementing_a_one-year_moratorium_on_police_use_of_Rekognition_iqctvn.jpg",
    instructor: "Hari Sir"
  },
  {
    id: 5,
    title: ".NET Fullstack Development",
    route: "/dotnet-fullstack",
    category: "Development",
    duration: "5 Months",
    rating: 4.8,
    reviews: 110,
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775205271/Converting_Numeric_Strings_to_Double_in_NET__Culture_and_Regional_Setting_Issues_wqmabs.jpg",
    instructor: "Expert Trainer"
  },
  {
    id: 6,
    title: "Data Analytics & Power BI",
    route: "/powerbi",
    category: "Data Science",
    duration: "3 Months",
    rating: 4.9,
    reviews: 140,
    image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775205169/Transform_Insights_into_Impact__How_Power_BI_Can_Change_Your_Business_xfiom0.jpg",
    instructor: "Karthik Sir"
  }
];

export default function Courses() {
  const navigate = useNavigate();

  const handleClick = (course: Course) => {
    if (course.route) {
      navigate(course.route);
    }
  };

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="section-subtitle">Popular Courses</span>
            <h2 className="section-title mb-0">Pick a course to get started</h2>
          </div>
        </div>

        {/* COURSE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              whileHover={{ y: -10 }}
              onClick={() => handleClick(course)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {course.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 text-orange-400 mb-3">
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs font-bold text-gray-700">{course.rating}</span>
                  <span className="text-xs text-gray-400">({course.reviews} reviews)</span>
                </div>

                <h3 className="text-lg font-bold mb-4 line-clamp-2 hover:text-brand-accent transition-colors">
                  {course.title}
                </h3>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <Clock size={14} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <BookOpen size={14} />
                    Lessons
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}