import { useState } from "react";

const ReportError = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reportText, setReportText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setReportText("");
    }, 2000);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow hover:bg-red-600"
      >
        Report Error
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[280px]">
            {submitted ? (
              <div className="text-center py-4">
                <p className="text-green-600 font-bold text-base">✓ Report Successfully Submitted!</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-base font-bold text-gray-800">Report an Issue</h2>
                  <button onClick={() => setIsOpen(false)} className="text-gray-600 text-lg">✖</button>
                </div>
                <textarea
                  className="w-full h-20 border border-gray-300 rounded-md p-2 text-sm text-black placeholder-gray-500 focus:ring-2 focus:ring-red-500"
                  placeholder="Describe the issue..."
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                />
                <div className="mt-3 flex justify-end gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-bold hover:bg-red-600"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportError;