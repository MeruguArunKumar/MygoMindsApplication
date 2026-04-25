import { ExternalLink, CheckCircle2, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="py-28 bg-gradient-to-br from-orange-100 via-pink-50 to-red-100 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-300/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-orange-300/30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-semibold text-pink-500 uppercase tracking-wider">
            Student Access
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3 mb-6 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            Enter Your Learning Portal
          </h2>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Access your personalized dashboard to attend sessions, track progress,
            download resources, and stay connected with MyGo Minds—all in one place.
          </p>

          {/* FEATURES */}
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Track Course Progress",
              "Access Recorded Sessions",
              "Download Study Materials",
              "Attend Live Classes",
              "Placement Support",
              "Doubt Clearing Sessions",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium">
                <CheckCircle2 size={18} className="text-pink-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* MAIN CTA */}
          <a
            href="https://vncoyt.on-app.in/app/home?orgCode=vncoyt&referrer=utm_source=whatsapp&utm_medium=tutor-app-referral"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Go to Student Portal
            <ExternalLink size={18} />
          </a>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="relative">

          <div className="bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_25px_80px_rgba(255,100,100,0.25)] rounded-3xl p-10">

            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-pink-500" />
              <h3 className="text-xl font-semibold">
                MyGo Minds Portal
              </h3>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/60 rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-red-500">1000+</p>
                <p className="text-sm text-gray-500">Students</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl font-bold text-pink-500">50+</p>
                <p className="text-sm text-gray-500">Courses</p>
              </div>
            </div>

            {/* SECONDARY CTA */}
            <a
              href="https://vncoyt.on-app.in/app/home?orgCode=vncoyt&referrer=utm_source=whatsapp&utm_medium=tutor-app-referral"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 transition"
            >
              Access Now
            </a>

          </div>

          {/* FLOATING BADGE */}
          <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-2xl px-4 py-2 text-sm font-medium text-gray-600">
            Live Dashboard
          </div>

        </div>

      </div>
    </section>
  );
}