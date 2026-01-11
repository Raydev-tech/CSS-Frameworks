export function Button({ children }) {
  return (
    <button className="px-4 py-2 rounded-xl bg-brand-primary text-white font-medium hover:bg-blue-700 focus:ring-2 focus:ring-brand-primary">
      {children}
    </button>
  );
}
