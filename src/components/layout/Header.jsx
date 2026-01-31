import { useEffect, useState } from "react";

export default function Header() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [dark, setDark] = useState(true);

  // Timer logic (simple)
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  // Theme toggle
  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <header className="flex items-center justify-between py-4">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-500">
        TechLearn
      </h1>

      {/* Timer */}
      <div className="flex items-center gap-2 text-sm">
        <span className="font-mono">
          ⏱ {minutes}:{secs.toString().padStart(2, "0")}
        </span>

        <button
          onClick={() => setRunning(true)}
          className="px-2 py-1 bg-blue-600 rounded text-xs"
        >
          Start
        </button>

        <button
          onClick={() => setRunning(false)}
          className="px-2 py-1 border rounded text-xs"
        >
          Pause
        </button>

        <button
          onClick={() => {
            setRunning(false);
            setSeconds(0);
          }}
          className="px-2 py-1 border rounded text-xs"
        >
          Reset
        </button>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        <button onClick={toggleTheme} className="text-lg">
          {dark ? "🌙" : "☀️"}
        </button>

        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-semibold">
          U
        </div>
      </div>
    </header>
  );
}
