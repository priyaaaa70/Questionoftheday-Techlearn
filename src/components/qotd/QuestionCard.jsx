import { useState } from "react";

export default function QuestionCard({ question }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <section className="bg-card border border-slate-800 rounded-xl p-6 space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-blue-400">
          <span className="h-2 w-2 rounded-full bg-blue-400"></span>
          Question of the Day
        </div>

        <div className="text-sm text-blue-300">
          🔥 Streak <span className="font-semibold text-blue-200">3</span>
        </div>
      </div>

      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          {question.title}
        </h2>

        <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300">
          {question.difficulty}
        </span>
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
        <p>You are given the head of a singly linked list.</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>Group all nodes at <b>odd indices</b> first</li>
          <li>Then append all nodes at <b>even indices</b></li>
          <li>Maintain relative order within each group</li>
        </ul>

        <p>The first node is considered odd, the second even, and so on.</p>

        <div>
          <p className="text-blue-300 mb-1">Required Complexity</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Time: <b>O(n)</b></li>
            <li>Extra Space: <b>O(1)</b></li>
          </ul>
        </div>
      </div>

      {/* ACCEPTANCE */}
      <div className="grid grid-cols-2 divide-x divide-slate-700 bg-slate-800/40 rounded-lg">
        <div className="py-3 text-center">
          <p className="text-xs uppercase text-slate-400">Acceptance</p>
          <p className="text-lg font-semibold text-white">124</p>
        </div>

        <div className="py-3 text-center">
          <p className="text-xs uppercase text-slate-400">Acceptance Rate</p>
          <p className="text-lg font-semibold text-white">62%</p>
        </div>
      </div>

      {/* LEADERBOARD */}
      <div>
        <p className="text-sm font-semibold text-white mb-2">Leaderboard</p>
        <ul className="text-sm text-slate-300 space-y-1">
          <li>1. Aryan — 98%</li>
          <li>2. Neha — 94%</li>
          <li>3. You — 92%</li>
        </ul>
      </div>

      {/* HINT */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <div className="flex justify-between mb-2">
          <p className="text-sm font-semibold text-blue-200">💡 Hint</p>
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs text-blue-400 hover:underline"
          >
            {showHint ? "Hide" : "Show"}
          </button>
        </div>

        {showHint && (
          <p className="text-sm text-slate-300">
            Maintain two pointers — one for odd nodes and one for even nodes.
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4 flex justify-between">
        <div>
          <p className="font-semibold text-white">Stay consistent</p>
          <p className="text-sm text-slate-300">
            Get daily coding questions delivered.
          </p>
        </div>

        <button className="bg-blue-500 text-black px-4 py-2 rounded-lg font-semibold">
          Subscribe
        </button>
      </div>

    </section>
  );
}
