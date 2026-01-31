export default function OutputBox({ output }) {
  return (
    <div className="bg-card rounded-xl p-4 text-sm">
      <p className="text-gray-400 mb-2">Output</p>

      <div className="bg-black rounded-lg p-3 min-h-[60px]">
        {output ? (
          <span className="text-green-400">{output}</span>
        ) : (
          <span className="text-gray-500">
            Run code to see output
          </span>
        )}
      </div>
    </div>
  );
}
