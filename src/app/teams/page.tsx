"use client";

import DashboardLayout from "@/components/DashboardLayout";
import TeamCard from "@/components/TeamCard";
import { teamsMock } from "@/data/teams";

export default function TeamsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Worlds 2025 – Teams</h1>
          <p className="text-amber-300/80 mt-1">
            The 16 teams competing at the League of Legends World Championship 2025.
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-cyan-400/20">
            <p className="text-sm font-medium text-cyan-300 mb-1">Total Teams</p>
            <p className="text-3xl font-bold text-white">{teamsMock.length}</p>
          </div>

          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-emerald-400/20">
            <p className="text-sm font-medium text-emerald-300 mb-1">Regions Represented</p>
            <p className="text-3xl font-bold text-white">5</p>
          </div>

          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-purple-400/20">
            <p className="text-sm font-medium text-purple-300 mb-1">Last Years Champion</p>
            <p className="text-3xl font-bold text-white">T1</p>
          </div>
        </div>

        {/* Teams grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamsMock.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
