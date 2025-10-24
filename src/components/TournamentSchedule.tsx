import { CalendarDays, Boxes, Swords, Crown } from "lucide-react";

export default function TournamentSchedule() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-6 border border-cyan-400/20">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
        <CalendarDays className="mr-3" />
        Tournament Schedule
      </h3>
      <div className="space-y-4">
        {/* Group Stage */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
          <div>
            <p className="font-bold text-white">Group Stage</p>
            <p className="text-sm text-cyan-300/80">Oct 15 - Oct 25, 2025</p>
          </div>
          <span className="text-cyan-400 text-2xl">
            <Boxes />
          </span>
        </div>

        {/* Knockout Stage */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
          <div>
            <p className="font-bold text-white">Knockout Stage</p>
            <p className="text-sm text-emerald-300/80">Oct 28 - Nov 5, 2025</p>
          </div>
          <span className="text-emerald-400 text-2xl">
            <Swords />
          </span>
        </div>

        {/* Grand Finals */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
          <div>
            <p className="font-bold text-white">Grand Finals</p>
            <p className="text-sm text-purple-300/80">Nov 10, 2025</p>
          </div>
          <span className="text-purple-400 text-2xl">
            <Crown />
          </span>
        </div>
      </div>
    </div>
  );
}
