import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const navigate = useNavigate();

  const scheduleData = [
    {
      course: "AZURE DEVOPS (WEEKEND BATCH)",
      faculty: "Real Time Expert",
      date: "-",
      time: "9:00 AM - 11:00 AM",
    },
    {
      course: ".NET FullStack",
      faculty: "BABU SIR",
      date: "-",
      time: "08:00 PM",
    },
    {
      course: ".NET FullStack",
      faculty: "BABU SIR",
      date: "-",
      time: "10:00 AM",
    },
    {
      course: "REACT JS",
      faculty: "Karthik Sir",
      date: "-",
      time: "08:00 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold mb-3 text-brand-primary">
            Course Schedule
          </h1>
        </div>

        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-gray-200">

          <div className="grid grid-cols-6 bg-gradient-to-r from-black to-gray-800 text-white font-semibold text-sm px-6 py-4">
            <span>Course</span>
            <span>Faculty</span>
            <span>Date</span>
            <span>Time</span>
            <span>Details</span>
            <span>Action</span>
          </div>

          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center px-6 py-5 border-b hover:bg-gray-50"
            >
              <div className="font-semibold">{item.course}</div>
              <div>{item.faculty}</div>
              <div>{item.date}</div>

              <div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                  {item.time}
                </span>
              </div>

              <div>
                <button className="text-brand-accent font-semibold">
                  View Details
                </button>
              </div>

              <div>
                <button
                  onClick={() =>
                    navigate("/enroll", {
                      state: { course: item.course }, // ✅ PASS DATA
                    })
                  }
                  className="px-5 py-2 rounded-full text-white font-semibold 
                  bg-gradient-to-r from-orange-500 to-red-500"
                >
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}