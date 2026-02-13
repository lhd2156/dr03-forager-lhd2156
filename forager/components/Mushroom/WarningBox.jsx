export default function WarningBox({ isToxic }) {
  if (!isToxic) return null;

  return (
    <div className="bg-red-500 text-white p-2 text-xs rounded-md w-full">
      <strong>⚠ WARNING</strong> This is a toxic species, proceed with caution.
    </div>
  );
}