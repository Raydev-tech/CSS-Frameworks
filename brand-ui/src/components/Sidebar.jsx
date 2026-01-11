export default function Sidebar() {
  return (
    <aside className="w-24 bg-white border-r flex flex-col items-center py-6 gap-6">
      <div className="w-12 h-12 rounded-full bg-emerald-500" />
      {["📊", "📸", "📢", "📈", "🎁"].map((icon, i) => (
        <button key={i} className="p-3 rounded-lg hover:bg-muted">
          {icon}
        </button>
      ))}
      <button className="mt-auto p-3 hover:bg-muted rounded-lg">←</button>
    </aside>
  );
}
