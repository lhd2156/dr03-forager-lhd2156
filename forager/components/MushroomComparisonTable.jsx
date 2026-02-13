import { useState, useEffect } from "react";

const tableFields = [
  "capShape",
  "capColor", 
  "capTexture",
  "gillType",
  "gillColor",
  "stemShape",
  "stemColor",
  "stemRing",
  "habitat",
];

const MushroomComparisonTable = ({ userMushroom, comparedMushroom }) => {
  const [editableMushroom, setEditableMushroom] = useState(() => {
    if (typeof window === "undefined") return userMushroom;
    const stored = sessionStorage.getItem("userMushroomEdits");
    return stored ? { ...userMushroom, ...JSON.parse(stored) } : userMushroom;
  });
  const [editFeature, setEditFeature] = useState(null);
  const [newValue, setNewValue] = useState("");

  const handleEditClick = (feature) => {
    setEditFeature(feature);
    setNewValue(editableMushroom[feature]);
  };

  const handleSave = () => {
    if (editFeature !== null) {
      const updated = { ...editableMushroom, [editFeature]: newValue };
      setEditableMushroom(updated);
      const edits = {};
      tableFields.forEach(f => { edits[f] = updated[f]; });
      sessionStorage.setItem("userMushroomEdits", JSON.stringify(edits));
      setEditFeature(null);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 overflow-hidden w-full mx-auto">
      <table className="w-full border-collapse text-base">
        <tbody>
          {tableFields.map((feature, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="px-4 py-2 text-gray-700 border-r border-gray-300 w-1/3 align-middle">
                <div className="flex items-start space-x-2">
                  <button
                    onClick={() => handleEditClick(feature)}
                    className="text-gray-500 hover:text-red-500 w-5 h-5 flex items-center justify-center rounded-full border border-gray-400"
                  >
                    ✖
                  </button>
                  <span className="underline translate-y-[2px]">
                    {editableMushroom[feature] || "?"}
                  </span>
                </div>
              </td>

              <td className="px-4 py-2 font-bold text-gray-900 border-x border-gray-300 text-center w-1/3">
                {feature
                  .replace(/([A-Z])/g, " $1")
                  .trim()
                  .replace(/^./, (str) => str.toUpperCase())}
              </td>

              <td className="px-4 py-2 text-gray-700 border-l border-gray-300 text-center w-1/3">
                {comparedMushroom[feature] || "?"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editFeature !== null && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-bold text-black mb-4">Edit</h2>
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
              className="w-full p-2 border rounded-md text-black"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setEditFeature(null)}
                className="mr-3 px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MushroomComparisonTable;