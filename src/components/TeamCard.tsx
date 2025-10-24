import type { Team } from "@/data/teams";
import AppImage from "@/components/AppImage";

type TeamCardProps = {
  team: Team;
};

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="bg-linear-to-r from-blue-800 to-indigo-900 rounded-xl shadow-2xl hover:border-indigo-300/60 transition-all p-6 flex flex-col items-center">
      {/* Logo */}
      <div className="w-20 h-20 flex items-center justify-center">
        <AppImage src={team.logo} alt={`${team.name} logo`} size={80} />
      </div>

      {/* Team Name */}
      <h3 className="text-lg font-bold text-white mt-4">{team.name}</h3>

      {/* Team Region */}
      <p className="text-sm text-emerald-300 mt-1">{team.region}</p>
    </div>
  );
}