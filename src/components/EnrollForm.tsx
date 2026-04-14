import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function EnrollForm() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    year: "",
    mode: "",
    address: "",
    qualification: "",
    course: "",
    experience: "",
  });

  const isPrefilled = Boolean(location.state?.course);

  useEffect(() => {
    if (isPrefilled) {
      setFormData((prev) => ({
        ...prev,
        course: location.state.course,
      }));
    }
  }, [location.state]);

  const handleChange = (e: any) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!formData.course) {
      alert("Please select a course");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Enter valid 10 digit number");
      return;
    }

    console.log(formData);
    alert("Enrollment submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-red-100 flex items-center justify-center px-4 py-20">

      <div className="w-full max-w-6xl bg-white/60 backdrop-blur-2xl shadow-[0_25px_80px_rgba(255,100,100,0.25)] rounded-3xl p-10 border border-white/40">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Enroll Now 
          </h1>
          <p className="text-gray-600 mt-3">
            Start your journey with MyGo Minds today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Email Address" name="email" value={formData.email} onChange={handleChange} />

            <Select label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Select>

            <Input label="Passed Out Year" name="year" value={formData.year} onChange={handleChange} />

            <Select label="Mode of Learning" name="mode" value={formData.mode} onChange={handleChange}>
              <option value="">Select Mode</option>
              <option>Online</option>
              <option>Offline</option>
            </Select>

            <Textarea label="Address" name="address" value={formData.address} onChange={handleChange} />

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* PHONE */}
            <div>
              <label className="label">Mobile Number</label>
              <div className="flex items-center border rounded-xl overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-pink-400">
                <span className="px-3 bg-gradient-to-r from-red-100 to-pink-100 font-semibold text-sm">
                  🇮🇳 +91
                </span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full px-4 py-3 outline-none bg-transparent"
                  placeholder="Enter number"
                  required
                />
              </div>
            </div>

            <Input label="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} />

            {/* COURSE */}
            {isPrefilled ? (
              <Input
                label="Selected Course"
                name="course"
                value={formData.course}
                readOnly
                className="bg-gray-100 cursor-not-allowed"
              />
            ) : (
              <Select label="Choose Course" name="course" value={formData.course} onChange={handleChange}>
                <option value="">Select Course</option>
                <option>Java Fullstack</option>
                <option>Python Fullstack</option>
                <option>.NET Fullstack</option>
                <option>Power BI</option>
                <option>Azure DevOps</option>
                <option>React JS</option>
              </Select>
            )}

            <Input label="Experience (Optional)" name="experience" value={formData.experience} onChange={handleChange} />

          </div>

          {/* BUTTON */}
          <div className="col-span-2 mt-6">
            <button className="w-full py-4 rounded-full font-bold text-white text-lg bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Submit Application 
            </button>
          </div>

        </form>
      </div>

      {/* STYLES */}
      <style>
        {`
          .label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 6px;
            color: #374151;
          }

          input, select, textarea {
            width: 100%;
            padding: 12px 14px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            outline: none;
            transition: 0.3s;
            background: rgba(255,255,255,0.8);
          }

          input:focus, select:focus, textarea:focus {
            border-color: #ec4899;
            box-shadow: 0 0 0 3px rgba(236,72,153,0.2);
          }
        `}
      </style>
    </div>
  );
}

/* INPUT */
function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="label">{label}</label>
      <input {...props} />
    </div>
  );
}

/* SELECT */
function Select({ label, children, ...props }: any) {
  return (
    <div>
      <label className="label">{label}</label>
      <select {...props}>{children}</select>
    </div>
  );
}

/* TEXTAREA */
function Textarea({ label, ...props }: any) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea rows={3} {...props} />
    </div>
  );
}