import DashboardLayout from "@/components/DashboardLayout";

export default function AboutPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-white">About Worlds 2025</h2>
          <p className="text-amber-300/80 mt-1">
            Everything you need to know about the League of Legends World
            Championship 2025.
          </p>
        </div>

        {/* Event */}
        <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl shadow-2xl p-6">
          <h3 className="text-lg font-bold text-cyan-300/80">Event Overview</h3>
          <p className="text-slate-200/90">
            The League of Legends World Championship 2025 brings together the
            top 16 teams from around the globe to compete for the ultimate
            prize. Teams from LCK, LPL, LEC, LCS, PCS, and LLA will face off in
            an intense battle of strategy, skill, and teamwork.
          </p>
        </div>

        {/* Event Dates */}
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl shadow-2xl p-6">
          <h3 className="text-lg font-bold text-emerald-300/80">Event Dates</h3>
          <p className="text-slate-200/90">
            The tournament starts on{" "}
            <span className="font-semibold text-white">October 15, 2025</span>{" "}
            and concludes with the grand finals on{" "}
            <span className="font-semibold text-white">November 9, 2025</span>.
          </p>
        </div>

        {/* Details */}
        <div className=" bg-purple-500/10 border border-purple-500/30 rounded-xl shadow-2xl p-6">
          <h3 className="text-lg font-bold text-purple-300/80">Details</h3>
          <p className="text-slate-200/90">
            The 2025 League of Legends World Championship marks a historic
            milestone: the 15th anniversary of LoL Esports. Worlds stands as the
            pinnacle of competition, where the best teams from leagues around
            the globe face off for the ultimate title. This year, Worlds returns
            to China under the slogan “CONQUER YOUR LEGACY.”
          </p>
        </div>

        {/* Teams Info */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl shadow-2xl p-6">
          <h3 className="text-lg font-bold text-amber-300/80">
            Participating Teams
          </h3>
          <p className="text-slate-200/90">
            A total of
            <span className="font-semibold text-white"> 16 teams</span> from
            major regions including LCK, LPL, LEC, LCS, PCS, and LLA will
            compete in group stages, knockouts, and finals.
          </p>
        </div>

        {/* Fun Fact */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl shadow-2xl p-6">
          <h3 className="text-lg font-bold text-blue-300/80">Fun Fact</h3>
          <p className="text-slate-200/90">
            The <span className="font-semibold text-white">2025 World Champion
            </span> is <span className="font-semibold text-white">T1</span>, who secured
            their historic fifth world title after an unforgettable final in
            China.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
