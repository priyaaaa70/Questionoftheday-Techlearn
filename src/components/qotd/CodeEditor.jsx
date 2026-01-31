export default function CodeEditor({ code, setCode }) {
  return (
    <div className="bg-card rounded-xl p-4 space-y-3">
      
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <select className="bg-black/40 border border-slate-700 text-sm px-2 py-1 rounded-md">
          <option>C++</option>
          <option>Python</option>
          <option>Java</option>
        </select>

        <span className="text-xs text-slate-400">
          Scroll ↓
        </span>
      </div>

      {/* Editor */}
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="// Write your code here..."
        className="w-full h-64 bg-black text-green-400 font-mono text-sm p-3 rounded-lg resize-none overflow-y-auto outline-none"
      />
    </div>
  );
}
