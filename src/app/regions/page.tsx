'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { regionsMock } from '@/data/regions';

export default function RegionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Regions – Worlds 2025</h2>
          <p className="text-amber-300/80 mt-1">The main regions participating in the LoL Worlds 2025.</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-emerald-400/20">
            <p className="text-sm font-medium text-emerald-300 mb-1">Total Regions</p>
            <p className="text-3xl font-bold text-white">{regionsMock.length}</p>
          </div>

          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-cyan-400/20">
            <p className="text-sm font-medium text-cyan-300 mb-1">Total Teams</p>
            <p className="text-3xl font-bold text-white">16</p>
          </div>

          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-purple-400/20">
            <p className="text-sm font-medium text-purple-300 mb-1">Main Regions</p>
            <p className="text-3xl font-bold text-white">Global Coverage</p>
          </div>
        </div>

        {/* Grid of regions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionsMock.map((region) => (
            <div key={region.id} className="bg-linear-to-r from-blue-800 to-indigo-900 rounded-xl shadow-2xl p-6 flex flex-col items-center hover:border-cyan-300/50 transition-all">
              <div className="text-5xl mb-3  text-cyan-300">{region.icon}</div>
              <h3 className="text-lg font-bold text-white">{region.name}</h3>
              <p className="text-amber-300/80">{region.teamsCount} Teams</p>
            </div>
          ))}
        </div>

        
      </div>
    </DashboardLayout>
  );
}
