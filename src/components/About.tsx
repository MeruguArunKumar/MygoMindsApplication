import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ ADD THIS

export default function About() {

  const navigate = useNavigate(); // ✅ ADD THIS

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
        
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220702/IMG_7644_zjrvyv.jpg" className="rounded-2xl shadow-lg" alt="About" />
              <img src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220662/IMG_1628_f5w68g.jpg" className="rounded-2xl shadow-lg" alt="About" />
            </div>
            <div className="space-y-4">
              <img src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775216390/mygominds-training-and-placement-institute-hyderabad-70a393byp9_yonnuo.jpg" className="rounded-2xl shadow-lg" alt="About" />
              <img src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220685/IMG_7544_rurv2i.jpg" className="rounded-2xl shadow-lg" alt="About" />
            </div>
          </div>
        </div>

        <div>
          <span className="section-subtitle">Get to know us</span>
          <h2 className="section-title">Grow your skills, learn with us from anywhere</h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            At MyGo Minds, we are a leading training and placement provider, dedicated to empowering aspiring professionals with the skills and knowledge they need to excel in the tech industry.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Expert Instructors",
              "Flexible Learning",
              "Hands-On Projects",
              "100% Job Assistance",
              "Mock Interviews",
              "Lab Facilities"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 size={18} className="text-brand-accent" />
                {item}
              </li>
            ))}
          </ul>

          {/* ✅ UPDATED BUTTON */}
          <button
            onClick={() => navigate("/courses")}
            className="btn-primary"
          >
            Discover More
          </button>

        </div>
      </div>
    </section>
  );
}