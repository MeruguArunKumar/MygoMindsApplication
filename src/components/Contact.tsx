import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

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

    if (!/^\d{10}$/.test(formData.phone)) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    const fullPhone = `${formData.countryCode}${formData.phone}`;

    // ✅ GOOGLE FORM SUBMIT URL
    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSd-OV88qaAUC-356kik_OEq0zo5kat0uGyE1O_4YFSr6L9PcA/formResponse";

    const data = new URLSearchParams();

    // ✅ EXACT FIELD MAPPING
    data.append("entry.1000366847", formData.name);      // Name
    data.append("entry.413168063", formData.email);      // Email
    data.append("entry.1597206432", fullPhone);          // Phone (with country code)
    data.append("entry.241756417", formData.message);    // Message

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });

    } catch (error) {
      alert("Submission failed");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p className="text-gray-600">
            Have questions about courses, batches, or placements? 
            Fill out the form and our team will get back to you.
          </p>

          <div>
            <p className="font-semibold">Phone:</p>
            <p className="text-gray-600">+91 8885302122</p>
          </div>

          <div>
            <p className="font-semibold">Email:</p>
            <p className="text-gray-600">mygominds@gmail.com</p>
          </div>

          <div>
            <p className="font-semibold">Location:</p>
            <p className="text-gray-600">Hyderabad, India</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-8 space-y-6"
        >
          {/* NAME */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-1 font-medium">Phone</label>

            <div className="flex gap-2">
              
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 bg-gray-50"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
                <option value="+971">🇦🇪 +971</option>
              </select>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                required
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-brand-accent"
                placeholder="Enter mobile number"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-brand-accent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-accent text-white py-3 rounded-full font-bold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}