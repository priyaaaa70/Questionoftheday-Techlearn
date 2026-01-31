export default function SplitLayout({ left, right }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">

      {/* LEFT PANEL */}
      <div
        className="
          w-full
          md:w-[420px]
          md:min-w-[320px]
          md:max-w-[50vw]
          md:resize-x
          md:overflow-y-auto
          overflow-visible
          md:h-[calc(100vh-110px)]
          border border-slate-800
          rounded-xl
          bg-card
        "
      >
        {left}
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 min-w-0">
        {right}
      </div>

    </div>
  );
}
