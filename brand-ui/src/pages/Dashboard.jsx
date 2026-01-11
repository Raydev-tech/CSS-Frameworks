import Header from "../components/Header";
import RetentionChart from "../components/RetentionChart";
import RevenueChart from "../components/RevenueChart";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";


const revenueData = [
  { date: "01", thisMonth: 45000, lastMonth: 38000 },
  { date: "05", thisMonth: 48000, lastMonth: 42000 },
  { date: "09", thisMonth: 52000, lastMonth: 45000 },
  { date: "13", thisMonth: 58000, lastMonth: 48000 },
  { date: "17", thisMonth: 62000, lastMonth: 50000 },
];

const retentionData = [
  { name: "W1", value: 65000 },
  { name: "W2", value: 82000 },
  { name: "W3", value: 72000 },
  { name: "W4", value: 95000 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8 space-y-6">
        <Header />

        <section className="grid grid-cols-3 gap-4">
          <StatCard
            title="Transactions"
            value="18,417"
            percent="7.34%"
            trend="up"
            note="more than last month"
          />
          <StatCard
            title="Authorizations"
            value="24,320"
            percent="3.18%"
            trend="down"
            note="going down"
            badge="NEEDS ATTENTION"
          />
          <StatCard
            title="Approvals"
            value="9,564"
            percent="0.32%"
            trend="up"
            note="looks good"
          />
        </section>

        <section className="grid grid-cols-2 gap-6">
          <RevenueChart data={revenueData} />
          <RetentionChart data={retentionData} />
        </section>
      </main>
    </div>
  );
}
