import { motion } from 'motion/react';
import { Award, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 pb-32 overflow-hidden">
      
      {/* BACKGROUND SHAPE */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Welcome to MyGo Minds</span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1]">
            Mygo Minds <br />
            <span className="text-brand-accent italic">Train Your Brain.</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Empowering aspiring professionals with expert-led training and guaranteed placement assistance in the most in-demand tech domains.
          </p>

          {/* ✅ UPDATED BUTTON */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Free Demo Class
            </a>
          </div>

          {/* STUDENTS */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  alt="User"
                />
              ))}
            </div>
            <p className="text-sm font-medium">
              <span className="text-brand-accent font-bold">5000+</span> Students already enrolled
            </p>
          </div>
        </motion.div>

        {/* RIGHT VIDEO SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >

          {/* VIDEO CONTAINER */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full aspect-video">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NGXNgIqA-Vs?start=134&controls=1"
              title="Learning Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

          </div>

          {/* CERTIFIED CARD */}
          <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl z-20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Award size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Certified</p>
                <p className="font-bold">Industry Recognized</p>
              </div>
            </div>
          </div>

          {/* PLACEMENT CARD */}
          <div className="absolute -top-10 -right-10 glass-card p-6 rounded-2xl z-20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Placement</p>
                <p className="font-bold">100% Assistance</p>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}