import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* LOGO + SOCIAL */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">M</div>
              <span className="text-xl font-serif font-bold">MyGo Minds</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Leading training and placement provider dedicated to empowering tech professionals.
            </p>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61555622101676" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition">
                <Facebook size={18} />
              </a>

              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition">
                <Twitter size={18} />
              </a>

              <a href="https://www.instagram.com/mygominds/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition">
                <Instagram size={18} />
              </a>

              <a href="https://www.linkedin.com/company/mygominds/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* ✅ QUICK LINKS (ALL WORKING) */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-accent transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-brand-accent transition">Courses</Link></li>
              <li><Link to="/schedule" className="hover:text-brand-accent transition">Schedule</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-accent transition">Gallery</Link></li>
              <li><Link to="/batches" className="hover:text-brand-accent transition">New Batches</Link></li>
              <li><Link to="/careers" className="hover:text-brand-accent transition">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition">Contact</Link></li>
            </ul>
          </div>

          {/* ✅ COURSES (ALL WORKING) */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Courses</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/java-fullstack" className="hover:text-brand-accent transition">Java Fullstack</Link></li>
              <li><Link to="/python-fullstack" className="hover:text-brand-accent transition">Python Fullstack</Link></li>
              <li><Link to="/dotnet-fullstack" className="hover:text-brand-accent transition">.NET Fullstack</Link></li>
              <li><Link to="/powerbi" className="hover:text-brand-accent transition">Power BI</Link></li>
              <li><Link to="/schedule" className="hover:text-brand-accent transition">AWS DevOps</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-8">Contact Us</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              
              <li className="flex gap-4">
                <Phone size={18} className="text-brand-accent flex-shrink-0" />
                <a href="tel:+918885302122" className="hover:text-brand-accent">
                  +91 8885302122
                </a>
              </li>

              <li className="flex gap-4">
                <Mail size={18} className="text-brand-accent flex-shrink-0" />
                <a href="mailto:mygominds@gmail.com" className="hover:text-brand-accent">
                  mygominds@gmail.com
                </a>
              </li>

              <li className="flex gap-4">
                <MapPin size={18} className="text-brand-accent flex-shrink-0" />
                <span>
                  Sai Ram Towers, Above Vijetha Super Market, JNTU Circle, KPHB, Hyderabad.
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium uppercase tracking-widest">
          <p>© 2026 MyGo Minds. All Rights Reserved.</p>
          <p>Designed with ❤️ for Tech Excellence</p>
        </div>
      </div>
    </footer>
  );
}