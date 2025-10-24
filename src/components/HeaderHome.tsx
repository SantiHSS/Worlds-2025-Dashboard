import AppImage from "@/components/AppImage";

export default function HeaderHome() {
  return (
    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-6 border border-cyan-400/20 relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
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
            <p className="text-xs text-emerald-400">Group + Knockouts</p>
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
  );
}