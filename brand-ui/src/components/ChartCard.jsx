export function ChartCard({ title }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-slate-400 text-sm">This month</span>
      </div>

      <div className="h-44 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
        Chart Placeholder
      </div>
    </div>
  );
}
