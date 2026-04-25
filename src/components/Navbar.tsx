"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'New Batches', path: '/batches' },
    { name: 'About Us', path: '/about' },
    { name: 'Exams', path: '/exams' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-brand-primary text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={12} className="text-brand-accent" />
              +91 8885302122
            </span>
            <span className="flex items-center gap-2">
              <Mail size={12} className="text-brand-accent" />
              mygominds@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/mygominds/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={14} />
            </a>
            <a href="https://www.instagram.com/mygominds/" target="_blank" rel="noopener noreferrer">
              <Instagram size={14} />
            </a>
            <a href="https://www.youtube.com/results?search_query=mygo+minds" target="_blank" rel="noopener noreferrer">
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-[100] bg-white shadow-md py-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/">
            <img 
              src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1777113830/mgmfulllogo_u1gqpr.png" 
              alt="Logo" 
              className="h-16"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`transition ${
                  location.pathname === link.path
                    ? "text-brand-accent font-bold"
                    : "text-black hover:text-brand-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ENROLL BUTTON */}
          <div className="hidden lg:block">
            <button 
              onClick={() => navigate("/enroll")}
              className="btn-primary py-2 px-6 text-sm hover:scale-105 transition"
            >
              Enroll Now
            </button>
          </div>

          {/* ✅ HAMBURGER (VISIBLE ON MOBILE) */}
          <button 
            className="p-2 lg:hidden z-[120]"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu 
              size={30}
              strokeWidth={2.5}
              className="text-black drop-shadow-lg"
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* BACKDROP */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* SIDE PANEL */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 120 }}
                className="fixed top-0 right-0 w-[80%] max-w-sm h-full z-[130] 
                           bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 
                           text-white shadow-2xl p-6 flex flex-col"
              >
                {/* CLOSE */}
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="self-end mb-6"
                >
                  <X size={30} />
                </button>

                {/* LINKS */}
                <div className="flex flex-col gap-5 text-lg font-semibold">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link 
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block hover:pl-2 transition-all duration-200"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* ENROLL BUTTON */}
                <button 
                  onClick={() => {
                    navigate("/enroll");
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-auto bg-white text-black py-3 rounded-full font-bold hover:scale-105 transition"
                >
                  Enroll Now
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </header>
    </>
  );
}