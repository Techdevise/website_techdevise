import { X } from "lucide-react";
import Alexjenson from "../assets/Alexjenson.svg";
import Mobileshowcase from "../assets/Mobileshowcase.svg";

const GettouchForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.id === "backdrop") {
      onClose();
    }
  };

  return (
    <div
      id="backdrop"
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4"
    >
      <div className="bg-white w-full max-w-[1300px] max-h-[95vh] overflow-y-auto md:flex md:h-[90vh] rounded-lg shadow-lg relative">
        {/* Left Section */}
        <div className="bg-[#157B6C] text-white p-8 md:w-[45%] flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-center leading-tight">
              Turn Your Idea into a <br /> Profit Making App
            </h1>
            <p className="text-center mt-4 text-base md:text-lg">
              Reach out to us and start your digital transformation <br /> journey today.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 border-teal-600">
                <img
                  src={Alexjenson}
                  alt="Alex Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">Alex Johnson</h3>
                <p className="text-teal-200">Seoproductief</p>
                <p className="text-teal-200">Head, Marketing</p>
              </div>
            </div>
            <p className="mt-4 text-sm md:text-base">
              We developed a great partnership with Techdevise...
            </p>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <div className="w-24 md:w-32 bg-white rounded-3xl overflow-hidden shadow-lg">
              <img src={Mobileshowcase} alt="App Screenshot" className="w-full h-[100px] md:h-[122px]" />
            </div>
          </div>

          <div className="text-center mt-4 text-sm">1/4</div>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6 md:p-12 relative">
          <button
            className="absolute top-4 right-4 bg-teal-700 text-white rounded-full p-2 z-50"
            onClick={onClose}
          >
            <X size={20} />
          </button>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inputs */}
              {[{ label: "Full Name", type: "text", placeholder: "Enter your name" },
                { label: "Business Email", type: "email", placeholder: "Enter your gmail" },
              ].map(({ label, type, placeholder }) => (
                <div key={label} className="space-y-1">
                  <label className="text-gray-800 font-medium">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700 text-black"
                  />
                </div>
              ))}

              {/* Mobile Number */}
              <div className="space-y-1">
                <label className="text-gray-800 font-medium">Mobile Number</label>
                <div className="flex">
                  <div className="border-b border-gray-300 pb-2 pr-2 flex items-center">
                    <div className="bg-gray-200 px-2 py-1 rounded text-black flex items-center">
                      +91 <span className="ml-1">▼</span>
                    </div>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="flex-1 border-b border-gray-300 pb-2 focus:outline-none focus:border-teal-700 text-black"
                  />
                </div>
              </div>

              {/* Job Title */}
              <div className="space-y-3">
                <label className="text-gray-800 font-medium">Job Title</label>
                <select className="w-full border-b border-gray-300 pb-2 bg-transparent text-black focus:outline-none">
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>

              {/* Launch Timeline */}
              <div className="col-span-1 md:col-span-2 space-y-1">
                <label className="text-gray-800 font-medium">
                  When do you want to launch a solution?
                </label>
                <select className="w-full border-b border-gray-300 pb-2 bg-transparent text-black focus:outline-none">
                  <option value="Immediately">Immediately</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6+ Months">6+ Months</option>
                </select>
              </div>

              {/* Budget */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center rounded-lg h-[78px] overflow-hidden">
                  <div className="px-6 py-2 text-black font-medium border-r border-gray-300">Budget</div>
                  <div className="flex flex-1 justify-between items-center">
                    {["$5k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map((range, idx, arr) => (
                      <div
                        key={range}
                        className={`flex-1 text-center py-2 text-sm ${
                          range === "$25k - $50k"
                            ? "text-teal-700 font-medium"
                            : "text-black"
                        } ${idx < arr.length - 1 ? "border-r border-gray-300" : ""}`}
                      >
                        {range}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="col-span-1 md:col-span-2 space-y-1">
                <label className="text-gray-800 font-medium">Description</label>
                <textarea
                  placeholder="Message"
                  className="w-full border-b text-black border-gray-300 pb-2 focus:outline-none focus:border-teal-700 min-h-[120px]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
                <button className="bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettouchForm;
