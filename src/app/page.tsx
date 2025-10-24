import DashboardLayout from "@/components/DashboardLayout";
import AppImage from "@/components/AppImage";
import {
  Boxes,
  Swords,
  Crown,
  CalendarDays,
  Medal,
  Trophy,
} from "lucide-react";


export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Main- Dashboard */}
        <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-6 border border-cyan-400/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center mb-4">
             <AppImage icon="logo" size={100} />
              <div className="ml-6">
                <h1 className="text-3xl font-bold text-white">
                  League of Legends World Championship 2025
                </h1>
                <p className="text-cyan-300 text-lg">
                  Follow the action, check stats, and explore all the teams
                  competing this year!
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-xl shadow-md p-6">
                <p className="text-sm font-medium text-cyan-300">
                  Participating Teams
                </p>
                <p className="text-3xl font-bold text-white">16</p>
                <p className="text-xs text-cyan-400">From all regions</p>
              </div>

              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl shadow-md p-6">
                <p className="text-sm font-medium text-emerald-300">
                  Total Matches
                </p>
                <p className="text-3xl font-bold text-white">60 - 90</p>
                <p className="text-xs  text-emerald-400">Group + Knockouts</p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl shadow-md p-6">
                <p className="text-sm font-medium text-purple-300">Viewers</p>
                <p className="text-3xl font-bold text-white">50M</p>
                <p className="text-xs text-purple-400">Peak audience</p>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl shadow-md p-6">
                <p className="text-sm font-medium text-amber-300">
                  Total Champions
                </p>
                <p className="text-3xl font-bold text-white">170</p>
                <p className="text-xs text-amber-400">Ready for battle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tournament Info Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tournament Schedule Box 1 */}
          <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-6 border border-cyan-400/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">
                <CalendarDays />
              </span>
              Tournament Schedule
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                <div>
                  <p className="font-bold text-white">Group Stage</p>
                  <p className="text-sm text-cyan-300/80">
                    Oct 15 - Oct 25, 2025
                  </p>
                </div>
                <span className="text-cyan-400 text-2xl">
                  <Boxes />
                </span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <div>
                  <p className="font-bold text-white">Knockout Stage</p>
                  <p className="text-sm text-emerald-300/80">
                    Oct 28 - Nov 5, 2025
                  </p>
                </div>
                <span className="text-emerald-400 text-2xl">
                  <Swords />
                </span>
              </div>

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

          {/* Top Teams Box 2 */}
          <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-6 border border-cyan-400/20">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">
                <Trophy />
              </span>
              Top Contenders
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl text-amber-300/80">
                    <Medal />
                  </span>
                  <div>
                    <p className="font-bold text-white">T1 (LCK)</p>
                    <p className="text-sm text-amber-300/80">
                      Defending Champions
                    </p>
                  </div>
                </div>
                <span className="text-amber-400"></span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl text-blue-300/80">
                    <Medal />
                  </span>
                  <div>
                    <p className="font-bold text-white">
                      Bilibili Gaming (LPL)
                    </p>
                    <p className="text-sm text-blue-300/80">2024 Finalists</p>
                  </div>
                </div>
                <span className="text-blue-400"></span>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl text-green-300/80">
                    <Medal />
                  </span>
                  <div>
                    <p className="font-bold text-white">G2 Esports (LEC)</p>
                    <p className="text-sm text-green-300/80">
                      European Powerhouse
                    </p>
                  </div>
                </div>
                <span className="text-green-400"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
