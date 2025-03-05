import { useState } from "react";

const ReportError = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reportText, setReportText] = useState("");

  return (
    <div>
      {/* Report Error Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow hover:bg-red-600"
      >
        Report Error
      </button>

      {/* Report Error Popup (Modal) */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Report an Issue</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 text-lg"
              >
                ✖
              </button>
            </div>

            {/* Report Input Box with Black Text */}
            <textarea
              className="w-full h-24 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-red-500 text-black placeholder-gray-500"
              placeholder="Describe the issue..."
              value={reportText}
              onChange={(e) => setReportText(e.target.value)}
            ></textarea>

            {/* Submit & Close Buttons */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm font-bold hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => alert("Report submitted! (Placeholder)")}
                className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportError;
