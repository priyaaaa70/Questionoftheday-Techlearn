export default function TestCases({
  testCases,
  activeCase,
  setActiveCase,
}) {
  const current = testCases[activeCase];

  return (
    <div className="bg-card rounded-xl p-4">
      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        {testCases.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveCase(index)}
            className={`px-3 py-1 text-sm rounded-md ${
              activeCase === index
                ? "bg-primary text-black"
                : "bg-black text-gray-400"
            }`}
          >
            Case {index + 1}
          </button>
        ))}
      </div>

      {/* Test Case Details */}
      <div className="space-y-3 text-sm">
        <div>
          <p className="text-gray-400">Input:</p>
          <div className="bg-black p-2 rounded text-green-400">
            {current.input}
          </div>
        </div>

        <div>
          <p className="text-gray-400">Expected Output:</p>
          <div className="bg-black p-2 rounded text-green-400">
            {current.expected}
          </div>
        </div>
      </div>
    </div>
  );
}
