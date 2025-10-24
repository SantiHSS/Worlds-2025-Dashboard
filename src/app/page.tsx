import DashboardLayout from "@/components/DashboardLayout";
import TournamentSchedule from "@/components/TournamentSchedule";
import TopContenders from "@/components/TopContenders";
import HeaderHome from "@/components/HeaderHome";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Home Section */}
        <HeaderHome />

        {/* Tournament Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TournamentSchedule />
          {/* Top Contenders */}
          <TopContenders />
        </div>
      </div>
    </DashboardLayout>
  );
}