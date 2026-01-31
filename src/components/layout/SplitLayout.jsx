export default function SplitLayout({ left, right }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <section className="space-y-6">{left}</section>
      <section className="space-y-6">{right}</section>
    </div>
  );
}
