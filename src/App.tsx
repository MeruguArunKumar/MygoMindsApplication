import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
import DotNetTopics from './components/DotNetTopics';
import DotNetTopic1 from './components/DotNetTopic1'
import TopicExamPage from './components/TopicExamPage';
import TopicExamPage1 from './components/TopicExamPage1';
import DotNetTopic2 from './components/DotNetTopic2';
import TopicExamPage2 from './components/TopicExamPage2';
import DotNetTopic3 from './components/DotNetTopic3';
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
      <div className="min-h-screen flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        
        <main className="flex-grow pt-20">
          <Routes>

            {/* HOME */}
            <Route path="/" element={<HomePage />} />

            {/* STATIC PAGES */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />

            {/* EXAMS MAIN PAGE */}
            <Route path="/exams" element={<Exams />} />

            {/* INDIVIDUAL EXAM PAGES */}
            <Route path="/java-exam" element={<JavaExam />} />
            <Route path="/python-exam" element={<PythonExam />} />
            <Route path="/aws-exam" element={<AwsExam />} />
            <Route path="/powerbi-exam" element={<PowerBiExam />} />
            {/*
            <Route path="/dotnet-exam" element={<DotNetExam />} /> 
            */}
            {/* CSharp / Advanced exams */}
            <Route path="/dotnet-exam" element={<DotNetExam />} />
          <Route path="/dotnet-topics" element={<DotNetTopics />} />
<Route path="/topic/:topic" element={<TopicExamPage />} />

{/* MVC / Advanced exams */}
<Route path="/dotnet-topic1" element={<DotNetTopic1 />} />
<Route path="/mvc-topic/:topic" element={<TopicExamPage1 />} />
{/* MVC Core / Advanced exams */}
<Route path="/dotnet-topic2" element={<DotNetTopic2 />} />
<Route path="/coremvc-topic/:topic" element={<TopicExamPage2 />} />
{/* WebApi / Advanced exams */}

<Route path="/dotnet-topic3" element={<DotNetTopic3 />} />
<Route path="/webapi-topic/:topic" element={<TopicExamPage3 />} />
            {/* SUB EXAMS */}
            <Route path="/Dotneexam1" element={<DNExamone />} />
            <Route path="/java-exam-1" element={<Javaexamone />} />
            <Route path="/python-exam-1" element={<Pythonexamone />} />
            <Route path="/aws-exam-1" element={<Awsexamone />} /> 
            <Route path="/powerbi-exam-1" element={<PowerBiExamOne />} />

            {/* COURSE PAGES */}
            <Route path="/java-fullstack" element={<JavaFullstack />} />
            <Route path="/python-fullstack" element={<PythonFullstack />} />
            <Route path="/dotnet-fullstack" element={<DotNetFullstack />} />
            <Route path="/powerbi" element={<PowerBI />} />

            {/* ENROLL */}
            <Route path="/enroll" element={<EnrollForm />} />

            {/* PLACEHOLDER */}
            <Route
              path="/batches"
              element={
                <div className="py-32 text-center">
                  New Batches Page Coming Soon
                </div>
              }
            />

            {/* 404 */}
            <Route
              path="*"
              element={
                <div className="py-32 text-center text-2xl font-bold">
                  404 - Page Not Found
                </div>
              }
            />

          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

        {/* WHATSAPP */}
        <a
          href="https://wa.me/918885302122?text=Hi%20I%20want%20to%20enroll%20in%20a%20course"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="Chat on WhatsApp"
            className="w-14 h-14 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
          />
        </a>

      </div>
    </Router>
  );
}