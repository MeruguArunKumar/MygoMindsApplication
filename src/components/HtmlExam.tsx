import { useNavigate } from "react-router-dom";
import { Globe, Code, Server, Database, Cloud } from "lucide-react";

export default function HtmlRoadmap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-orange-50 py-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            HTML Roadmap
          </h1>
          <p className="text-gray-600 mt-3">
            Step-by-step learning path to become a Frontend Developer
          </p>
        </div>

        <div className="space-y-10">
 
          {/* BASICS 
          <Section
            icon={<Code size={28} />}
            title="HTML Basics"
            items={[
              "What is HTML?",
              "HTML Document Structure",
              "Elements & Tags",
              "Attributes",
              "Headings & Paragraphs",
              "Text Formatting"
            ]}
            route="/html-topic/basics"
            navigate={navigate}
          />

          {/* TEXT + LINKS 
          <Section
            icon={<Globe size={28} />}
            title="Text & Links"
            items={[
              "Anchor Tag (<a>)",
              "Internal & External Links",
              "Lists (ul, ol, li)",
              "Description Lists",
              "Inline vs Block Elements",
              "Semantic Text Tags"
            ]}
            route="/html-topic/text"
            navigate={navigate}
          />

          {/* MEDIA 
          <Section
            icon={<Server size={28} />}
            title="Media Elements"
            items={[
              "Images (<img>)",
              "Audio & Video",
              "Iframes",
              "Figure & Figcaption",
              "Responsive Images",
              "Alt Attributes"
            ]}
            route="/html-topic/media"
            navigate={navigate}
          />

          {/* TABLES 
          <Section
            icon={<Database size={28} />}
            title="Tables"
            items={[
              "Table Structure",
              "thead, tbody, tfoot",
              "Rowspan & Colspan",
              "Table Styling Basics",
              "Responsive Tables",
              "Best Practices"
            ]}
            route="/html-topic/tables"
            navigate={navigate}
          />

          {/* FORMS 
          <Section
            icon={<Server size={28} />}
            title="Forms"
            items={[
              "Form Tag",
              "Input Types",
              "Labels & Placeholders",
              "Form Validation",
              "Radio & Checkbox",
              "Textarea & Select"
            ]}
            route="/html-topic/forms"
            navigate={navigate}
          />

          {/* SEMANTIC HTML 
          <Section
            icon={<Globe size={28} />}
            title="Semantic HTML"
            items={[
              "header, footer",
              "section, article",
              "nav, aside",
              "main tag",
              "Accessibility Basics",
              "SEO Friendly HTML"
            ]}
            route="/html-topic/semantic"
            navigate={navigate}
          />

          {/* ADVANCED 
          <Section
            icon={<Code size={28} />}
            title="Advanced HTML"
            items={[
              "Meta Tags",
              "Favicon",
              "HTML APIs (Drag & Drop)",
              "Local Storage Basics",
              "Canvas Basics",
              "SVG Basics"
            ]}
            route="/html-topic/advanced"
            navigate={navigate}
          />

          {/* BEST PRACTICES 
          <Section
            icon={<Cloud size={28} />}
            title="Best Practices"
            items={[
              "Clean Code Structure",
              "SEO Optimization",
              "Accessibility (a11y)",
              "Performance Optimization",
              "Cross Browser Support",
              "Validation Tools"
            ]}
            route="/html-topic/best-practices"
            navigate={navigate}
          />
*/}

<Section
  icon={<Globe size={28} />}
  title="HTML Complete Learning Path"
  items={[
    "1. Introduction (HTML Basics & Structure)",
    "2. Basic Tags (Headings, Paragraph, br, hr, Comments)",
    "3. Text Formatting (b, i, u, sup, sub, mark, small)",
    "4. Lists (ol, ul, li)",
    "5. Links & Images (a, img, attributes)",
    "6. Tables (table, tr, td, th)",
    "7. Forms (form, input, radio, checkbox, select)",
    "8. Layout Basics (div, span, block vs inline)",
    "9. Media (audio, video)",
    "10. Semantic Tags (header, nav, section, article, footer)"
  ]}
  route="/htmlexam-page"
  navigate={navigate}
/>
        </div>
      </div>
    </div>
  );
}

/* ✅ SAME SECTION COMPONENT */
function Section({ title, items, route, navigate, icon }: any) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl">
          {icon}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* CONTENT */}
      <ul className="grid md:grid-cols-2 gap-3 text-gray-600 text-sm">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-orange-500">✔</span> {item}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => navigate(route)}
        className="mt-6 px-6 py-3 rounded-full text-white font-semibold 
        bg-gradient-to-r from-orange-500 to-red-500 
        hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Start Learning →
      </button>

    </div>
  );
}