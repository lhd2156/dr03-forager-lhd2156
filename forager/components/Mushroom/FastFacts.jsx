export default function FastFacts({ data }) {
  if (!data) return <p className="text-gray-400">No fast facts available.</p>;

  return (
    <div className="text-lg">
      <p className="mb-1"><span className="font-semibold">Cap Diameter:</span> {data.capDiameter || "N/A"}</p>
      <p><span className="font-semibold">Gill Color:</span> {data.gillColor || "N/A"}</p>
    </div>
  );
}
