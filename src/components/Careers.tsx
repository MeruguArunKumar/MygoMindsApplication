import { useState } from "react";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    {
      title: "Java Full Stack Trainer",
      location: "Hyderabad",
      type: "Full Time",
      description:
        "Looking for experienced Java Full Stack trainers with strong knowledge in Spring Boot, REST APIs, and frontend technologies.",
    },
    {
      title: "Python Trainer",
      location: "Hyderabad",
      type: "Full Time",
      description:
        "Seeking Python experts with experience in Django and real-time project training.",
    },
    {
      title: "React JS Trainer",
      location: "Hyderabad",
      type: "Part Time",
      description:
        "Looking for React developers who can teach modern frontend development with hands-on projects.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Careers at MyGo Minds</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our team and help shape the future of tech education. We are always
          looking for passionate trainers and professionals.
        </p>
      </div>

      {/* JOB LISTINGS */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>

            <p className="text-sm text-gray-500 mb-2">
              📍 {job.location} • {job.type}
            </p>

            <p className="text-gray-600 mb-4">{job.description}</p>

            <button
              onClick={() => setSelectedJob(job.title)}
              className="bg-brand-accent text-white px-5 py-2 rounded-full font-semibold hover:opacity-90"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* APPLY FORM */}
      {selectedJob && (
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Apply for {selectedJob}
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Experience (e.g. 2 years)"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

            <textarea
              placeholder="Why should we hire you?"
              className="w-full border px-4 py-2 rounded-lg"
              rows={4}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-brand-primary text-white py-3 rounded-full font-bold hover:opacity-90"
            >
              Submit Application
            </button>
          </form>
        </div>
      )}
    </div>
  );
}