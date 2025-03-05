import Message from '@/components/Message';

export default function WarningOverlay({ onClose }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg relative w-11/12 max-w-md">
        {/* Header Row with Warning Icon & Close Button */}
        <div className="flex justify-between items-center">
          <img 
            src="/icons/icon_warning.svg" 
            alt="Warning Icon" 
            className="w-5 h-5"
          />
          <button
            className="text-white text-lg font-bold"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        {/* ATTENTION Title Below */}
        <h2 className="text-lg font-bold text-center mt-1">ATTENTION!</h2>

        {/* Warning Message */}
        <p className="mt-2 text-sm leading-tight text-center">
          Our system can make mistakes! Remember to <span className="font-bold">verify</span> important information
          and use your own judgment to determine if any mushroom is safe. Be sure to use the 
          <span className="font-bold text-yellow-200"> "Report Error"</span> button if you suspect a mistake.
        </p>
      </div>
    </div>
  );
}
