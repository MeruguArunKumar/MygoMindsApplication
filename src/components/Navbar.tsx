import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Search, Menu, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'New Batches', path: '/batches' },
    { name: 'About Us', path: '/about' },
    { name: 'Exams', path: '/exams'},
    { name: 'Contact', path: '/contact' },
  ];

  const handleSearch = (e: any) => {
    e.preventDefault();

    const match = navLinks.find(link =>
      link.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (match) {
      navigate(match.path);
      setSearchTerm("");
      setIsSearchOpen(false);
    } else {
      alert("No matching page found");
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
          
          {/* LEFT SIDE */}
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

          {/* RIGHT SIDE - SOCIAL LINKS */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/company/mygominds/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition"
            >
              <Linkedin size={14} />
            </a>

            <a 
              href="https://www.instagram.com/mygominds/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition"
            >
              <Instagram size={14} />
            </a>

            <a 
              href="https://www.youtube.com/results?search_query=mygo+minds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-accent transition"
            >
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://mygominds.com/images/MGM_FULL_LOGO.png" 
              alt="Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`hover:text-brand-accent transition ${
                  location.pathname === link.path ? "text-brand-accent font-bold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">

            {/* SEARCH */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Search size={20} />
            </button>

            {/* 🔥 UPDATED ENROLL BUTTON */}
            <button 
              onClick={() => navigate("/enroll")}
              className="btn-primary py-2 px-6 text-sm cursor-pointer hover:scale-105 transition"
            >
              Enroll Now
            </button>
          </div>

          {/* MOBILE MENU */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>

        {/* SEARCH BAR */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white shadow-md px-4 py-3 flex justify-center"
            >
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-lg border rounded-full px-5 py-2 outline-none"
              />
            </motion.form>
          )}
        </AnimatePresence>

      </header>
    </>
  );
}