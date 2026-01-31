export default function SplitLayout({ left, right }) {
  return (
    <div className="flex gap-4">

      {/* LEFT PANEL — HORIZONTAL RESIZE + VERTICAL SCROLL */}
      <div
        className="
          w-[420px]
          min-w-[320px]
          max-w-[50vw]
          resize-x
          overflow-y-auto
          overflow-x-hidden
          h-[calc(100vh-110px)]
          border border-slate-800
          rounded-xl
        "
      >
        {left}
      </div>

      {/* RIGHT PANEL — FLEX TAKES REMAINING SPACE */}
      <div className="flex-1 min-w-0">
        {right}
      </div>

    </div>
  );
}
