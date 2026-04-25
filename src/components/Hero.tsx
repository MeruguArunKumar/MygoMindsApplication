"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const cardY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const cardY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center pt-20 pb-10 overflow-hidden"
    >
      
      {/* BACKGROUND SHAPE */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4 z-0"
      />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: textY }}
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

          {/* 🔥 UPDATED BUTTON */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/watch?v=l8_GwdXmo2A&list=PLUomMi6vveyRBkd0QSM4dIzYaJTYfZ4Pl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Free Demo Class
            </a>
          </div>

          {/* STUDENTS */}
          <div className="mt-10 flex items-center gap-4">
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

        {/* RIGHT SHORT VIDEO SECTION */}
        <motion.div
          style={{ y: videoY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >

          {/* SHORTS VIDEO */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-black p-2">
            <div className="w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/l8_GwdXmo2A"
                title="YouTube Short"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CERTIFIED CARD */}
          <motion.div
            style={{ y: cardY1 }}
            className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Award size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Certified</p>
                <p className="font-bold">Industry Recognized</p>
              </div>
            </div>
          </motion.div>

          {/* PLACEMENT CARD */}
          <motion.div
            style={{ y: cardY2 }}
            className="absolute -top-8 -right-8 glass-card p-6 rounded-2xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Placement</p>
                <p className="font-bold">100% Assistance</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}