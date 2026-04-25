import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopBanner from './components/TopBanner';

// Home Sections
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Courses from './components/Courses';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';

// Course Pages
import DotNetFullstack from './components/DotNetFullstack';
import PowerBI from './components/PowerBI';
import JavaFullstack from './components/JavaFullstack';
import PythonFullstack from './components/PythonFullstack';

// Other Pages
import EnrollForm from "./components/EnrollForm";
import Schedule from './components/Schedule';
import GalleryPage from './components/GalleryPage';
import Contact from './components/Contact';
import Careers from './components/Careers';

// Exams Pages
import Exams from './components/Exams';
import JavaExam from './components/JavaExam';
import PythonExam from './components/pythonexam'; 
import AwsExam from './components/AwsExam';
import PowerBiExam from './components/PowerBiExam';
import DotNetExam from './components/DotNetExam';

// 🔥 DOTNET TOPIC SYSTEM (from 2nd file)
import DotNetTopics from './components/DotNetTopics';

import DotNetTopic1 from './components/DotNetTopic1';
import DotNetTopic2 from './components/DotNetTopic2';
import DotNetTopic3 from './components/DotNetTopic3';

import TopicExamPage from './components/TopicExamPage';
import TopicExamPage1 from './components/TopicExamPage1';
import TopicExamPage2 from './components/TopicExamPage2';

import TopicExamPage3 from './components/TopicExamPage3';

// Sub Exams
import DNExamone from './components/DNExamone';
import Javaexamone from './components/Javaexamone';
import Pythonexamone from './components/Pythonexamone';
import Awsexamone from './components/Awsexamone';
import PowerBiExamOne from './components/PowerBiExamOne';

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <About />
      <Courses />
      <CTA />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">

        {/* 🔥 WATERMARK BACKGROUND */}
        <img
          src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1777113830/mgmfulllogo_u1gqpr.png"
          alt="watermark"
          className="fixed inset-0 m-auto w-[520px] opacity-10 blur-[1px] pointer-events-none select-none z-0"
        />

        {/* NAVBAR */}
        <Navbar />


        {/* 🔥 TOP BANNER */}
        <TopBanner />

        {/* MAIN */}
        <main className="flex-grow relative z-10">

          <Routes>

            {/* HOME */}
            <Route path="/" element={<HomePage />} />

            {/* STATIC */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />

            {/* EXAMS */}
            <Route path="/exams" element={<Exams />} />
            <Route path="/java-exam" element={<JavaExam />} />
            <Route path="/python-exam" element={<PythonExam />} />
            <Route path="/aws-exam" element={<AwsExam />} />
            <Route path="/powerbi-exam" element={<PowerBiExam />} />

            <Route path="/dotnet-exam" element={<DotNetExam />} />

            {/* 🔥 DOTNET TOPIC ROUTES */}
            <Route path="/dotnet-topics" element={<DotNetTopics />} />

            {/* C# */}
            <Route path="/topic/:topic" element={<TopicExamPage />} />

            {/* MVC */}
            <Route path="/dotnet-topic1" element={<DotNetTopic1 />} />
            <Route path="/mvc-topic/:topic" element={<TopicExamPage1 />} />

            {/* MVC Core */}
            <Route path="/dotnet-topic2" element={<DotNetTopic2 />} />
            <Route path="/coremvc-topic/:topic" element={<TopicExamPage2 />} />

            {/* Web API */}
            <Route path="/dotnet-topic3" element={<DotNetTopic3 />} />
            <Route path="/webapi-topic/:topic" element={<TopicExamPage3 />} />

            {/* SUB EXAMS */}
            <Route path="/Dotneexam1" element={<DNExamone />} />
            <Route path="/java-exam-1" element={<Javaexamone />} />
            <Route path="/python-exam-1" element={<Pythonexamone />} />
            <Route path="/aws-exam-1" element={<Awsexamone />} />
            <Route path="/powerbi-exam-1" element={<PowerBiExamOne />} />

            {/* COURSES */}
            <Route path="/java-fullstack" element={<JavaFullstack />} />
            <Route path="/python-fullstack" element={<PythonFullstack />} />
            <Route path="/dotnet-fullstack" element={<DotNetFullstack />} />
            <Route path="/powerbi" element={<PowerBI />} />

            {/* ENROLL */}
            <Route path="/enroll" element={<EnrollForm />} />

            {/* PLACEHOLDER */}
            <Route path="/batches" element={
              <div className="py-32 text-center">
                New Batches Page Coming Soon
              </div>
            } />

            {/* 404 */}
            <Route path="*" element={
              <div className="py-32 text-center text-2xl font-bold">
                404 - Page Not Found
              </div>
            } />

          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

        {/* 🔥 ADVANCED WHATSAPP BUTTON */}
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">

          <div className="absolute w-28 h-28 rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.6)_0%,_rgba(34,197,94,0.35)_30%,_rgba(34,197,94,0.15)_55%,_transparent_70%)] blur-xl animate-pulse"></div>

          <div className="absolute w-44 h-44 rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.3)_0%,_rgba(34,197,94,0.12)_40%,_transparent_75%)] blur-2xl"></div>

          <a
            href="https://wa.me/918885302122?text=Hi%20I%20want%20to%20enroll%20in%20a%20course"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Chat on WhatsApp"
              className="w-14 h-14 hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
            />
          </a>

        </div>

      </div>
    </Router>
  );
}