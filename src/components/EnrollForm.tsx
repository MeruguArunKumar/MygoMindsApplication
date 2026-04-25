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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.course) {
      alert("Please select a course");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Enter valid 10 digit number");
      return;
    }

    // ✅ FINAL GOOGLE FORM SUBMIT URL
    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLScqaBE57efUFPf7w6tUjq6Y9BFX0EcPDhx5p1SA4eJIzn5rtg/formResponse";

    const data = new URLSearchParams();

    // ✅ EXACT FIELD MAPPING
    data.append("entry.256517667", formData.name);           // Name
    data.append("entry.143684493", formData.email);          // Email
    data.append("entry.269434935", formData.gender);         // Gender
    data.append("entry.1924209184", formData.year);          // Year
    data.append("entry.1836875072", formData.mode);          // Mode
    data.append("entry.1535442819", formData.address);       // Address
    data.append("entry.197989619", formData.phone);          // Phone
    data.append("entry.1939594807", formData.qualification); // Qualification
    data.append("entry.205996529", formData.course);         // Course

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });

      alert("Enrollment submitted successfully!");

      setFormData({
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

    } catch (error) {
      alert("Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-red-100 flex items-center justify-center px-4 py-20">

      <div className="w-full max-w-6xl bg-white/60 backdrop-blur-2xl shadow-[0_25px_80px_rgba(255,100,100,0.25)] rounded-3xl p-10 border border-white/40">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            Enroll Now 
          </h1>
          <p className="text-gray-600 mt-3">
            Start your journey with MyGo Minds today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">

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

          <div className="space-y-6">

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
                <option>Java Full Stack</option>
                <option>Python Full Stack</option>
                <option>.NET Full Stack</option>
                <option>Power BI</option>
                <option>Azure DevOps</option>
                <option>React JS</option>
              </Select>
            )}

            <Input label="Experience (Optional)" name="experience" value={formData.experience} onChange={handleChange} />

          </div>

          <div className="col-span-2 mt-6">
            <button className="w-full py-4 rounded-full font-bold text-white text-lg bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Submit Application 
            </button>
          </div>

        </form>
      </div>

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

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="label">{label}</label>
      <input {...props} />
    </div>
  );
}

function Select({ label, children, ...props }: any) {
  return (
    <div>
      <label className="label">{label}</label>
      <select {...props}>{children}</select>
    </div>
  );
}

function Textarea({ label, ...props }: any) {
  return (
    <div>
      <label className="label">{label}</label>
      <textarea rows={3} {...props} />
    </div>
  );
}