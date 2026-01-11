import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Card analytics</h1>

      <div className="flex gap-4">
        <button className="p-2 hover:bg-muted rounded-lg">
          <Search size={20} />
        </button>
        <button className="p-2 hover:bg-muted rounded-lg">
          <Bell size={20} />
        </button>
      </div>
    </div>
  );
}
