import { Trophy, Medal } from "lucide-react";

export default function TopContenders() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-6 border border-cyan-400/20">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
        <Trophy className="mr-3" />
        Top Contenders
      </h3>
      <div className="space-y-4">
        {/* T1 (LCK) */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center space-x-3">
            <span className="text-2xl text-amber-300/80">
              <Medal />
            </span>
            <div>
              <p className="font-bold text-white">T1 (LCK)</p>
              <p className="text-sm text-amber-300/80">Defending Champions</p>
            </div>
          </div>
        </div>

        {/* Bilibili Gaming (LPL) */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
          <div className="flex items-center space-x-3">
            <span className="text-2xl text-blue-300/80">
              <Medal />
            </span>
            <div>
              <p className="font-bold text-white">Bilibili Gaming (LPL)</p>
              <p className="text-sm text-blue-300/80">2024 Finalists</p>
            </div>
          </div>
          <span className="text-blue-400"></span>
        </div>

        {/* G2 Esports (LEC) */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-green-500/10 border border-green-500/30">
          <div className="flex items-center space-x-3">
            <span className="text-2xl text-green-300/80">
              <Medal />
            </span>
            <div>
              <p className="font-bold text-white">G2 Esports (LEC)</p>
              <p className="text-sm text-green-300/80">European Powerhouse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
