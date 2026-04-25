"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.span
                className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-4 block"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Get your quality
              </motion.span>

              <motion.h2
                className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Skills certificate from the <br />
                <span className="italic">MyGo Minds</span>
              </motion.h2>

              <motion.button
                className="btn-primary bg-brand-accent hover:bg-white hover:text-brand-primary"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Now
              </motion.button>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="hidden lg:block"
              initial={{ x: 120, opacity: 0, rotate: 6 }}
              whileInView={{ x: 0, opacity: 1, rotate: 3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.img
                src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775209171/ChatGPT_Image_Apr_3_2026_03_09_11_PM_ebwdbp.png"
                className="rounded-3xl shadow-2xl"
                alt="CTA"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}