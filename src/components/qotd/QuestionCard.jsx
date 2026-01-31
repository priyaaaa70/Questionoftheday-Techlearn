import { useState } from "react";

export default function QuestionCard({ question }) {
  const [expanded, setExpanded] = useState(true);
  const [showHint, setShowHint] = useState(false);

  return (
    <div
      className="
        bg-card rounded-xl shadow-md
        resize-y overflow-auto
        min-h-[420px] max-h-[720px]
        p-6 space-y-6
      "
    >
      {/* QOTD + Streak */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-blue-400">
          <span className="h-2 w-2 rounded-full bg-blue-400"></span>
          Question of the Day
        </div>

        <div className="text-sm text-blue-300">
          🔥 Streak <span className="font-semibold text-blue-200">3</span>
        </div>
      </div>

      {/* Title + Difficulty */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">
          {question.title}
        </h2>

        <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300">
          {question.difficulty}
        </span>
      </div>

      {/* Expand / Collapse */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-blue-400 hover:underline w-fit"
      >
        {expanded ? "Collapse details" : "Expand details"}
      </button>

      {expanded && (
        <>
          {/* Problem Explanation */}
          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>You are given the head of a singly linked list.</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Group all nodes at <b>odd indices</b> first</li>
              <li>Then append all nodes at <b>even indices</b></li>
              <li>Maintain relative order within each group</li>
            </ul>

            <p>
              The first node is considered odd, the second even, and so on.
            </p>

            <p className="text-blue-300">Required Complexity:</p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Time: <b>O(n)</b></li>
              <li>Extra Space: <b>O(1)</b></li>
            </ul>
          </div>

          {/* Acceptance Row */}
          <div className="flex items-center justify-between bg-slate-800/40 rounded-lg px-4 py-3">
            <div className="flex-1 text-center">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Acceptance
              </p>
              <p className="text-lg font-semibold text-white">124</p>
            </div>

            <div className="h-8 w-px bg-slate-600 mx-4"></div>

            <div className="flex-1 text-center">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Acceptance Rate
              </p>
              <p className="text-lg font-semibold text-white">62%</p>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">Leaderboard</p>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>1. Aryan — 98%</li>
              <li>2. Neha — 94%</li>
              <li>3. You — 92%</li>
            </ul>
          </div>

          {/* Hint (click to show) */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-blue-200">💡 Hint</p>

              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs text-blue-400 hover:underline"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </button>
            </div>

            {showHint && (
              <p className="text-sm text-slate-300 leading-relaxed">
                Maintain two pointers — one for odd nodes and one for even nodes.
                Traverse once and connect odd list to even list at the end.
              </p>
            )}
          </div>

          {/* Subscribe CTA */}
          <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Stay consistent</p>
              <p className="text-sm text-slate-300">
                Get daily coding questions delivered.
              </p>
            </div>

            <button className="bg-blue-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-blue-400">
              Subscribe
            </button>
          </div>
        </>
      )}
    </div>
  );
}
