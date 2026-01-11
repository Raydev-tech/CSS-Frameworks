import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

export default function StatCard({ title, value, percent, trend, note, badge }) {
  const isUp = trend === "up";

  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{title}</h3>
        {badge ? (
          <span className="text-xs bg-red-50 text-destructive px-3 py-1 rounded-full">
            {badge}
          </span>
        ) : (
          <ArrowRight className="w-5 h-5 text-muted-foreground" />
        )}
      </div>

      <p className="text-4xl font-bold mb-2">{value}</p>

      <div
        className={`flex items-center gap-1 text-sm font-medium ${
          isUp ? "text-accent-secondary" : "text-destructive"
        }`}
      >
        {isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        {percent} {isUp ? "↗" : "↘"} {note}
      </div>
    </div>
  );
}
