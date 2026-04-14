import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kinjarapu Sagar",
      role: "Software Engineer",
      text: "The Java Fullstack course was incredible. The practical projects helped me land my dream job within weeks of completion."
    },
    {
      name: "Vishwanath",
      role: "DevOps Specialist",
      text: "Expert instructors and flexible learning. The AWS DevOps training is top-notch and industry-relevant."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div>
            <span className="section-subtitle">Our Testimonials</span>
            <h2 className="section-title">What they're saying about our courses</h2>
            <p className="text-gray-600">
              Real stories from real students who transformed their careers with MyGo Minds.
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {testimonials.map((testi, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brand-bg border border-gray-50 shadow-sm">
                <div className="flex items-center gap-1 text-orange-400 mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 mb-8 italic">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/t${i}/100/100`} className="w-12 h-12 rounded-full" alt={testi.name} />
                  <div>
                    <p className="font-bold">{testi.name}</p>
                    <p className="text-xs text-gray-400">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}