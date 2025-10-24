'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { Bar, Line } from 'react-chartjs-2';
import { worlds2025Stats, worlds2025DurationStats } from '@/data/stats';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function StatsPage() {
  const { totalTeams, regions, lastChampion, teamsPerRegion } = worlds2025Stats;

  // team per region
  const barData = {
    labels: teamsPerRegion.map((r) => r.region),
    datasets: [
      {
        label: 'Teams per Region',
        data: teamsPerRegion.map((r) => r.count),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  // average game duration
  const durationData = {
    labels: worlds2025DurationStats.labels,
    datasets: [
      {
        label: worlds2025DurationStats.label,
        data: worlds2025DurationStats.data,
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.25)',
        fill: true,
      },
    ],
  };

  const options = { responsive: true };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-white">Worlds 2025 Stats</h2>
          <p className="text-amber-300/80 mt-1">
            Key statistics and data from the League of Legends World Championship 2025.
          </p>
        </div>

        {/* Stats principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-cyan-400/20">
            <p className="text-sm font-medium text-cyan-300 mb-1">Total Teams</p>
            <p className="text-3xl font-bold text-white">{totalTeams}</p>
          </div>

          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-emerald-400/20">
            <p className="text-sm font-medium text-emerald-300 mb-1">Regions Represented</p>
            <p className="text-3xl font-bold text-white">{regions.length}</p>
          </div>

          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-purple-400/20">
            <p className="text-sm font-medium text-purple-300 mb-1">Last Champion</p>
            <p className="text-3xl font-bold text-white">{lastChampion}</p>
          </div>
        </div>

        {/* Bar chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-blue-400/20">
            <h3 className="h-14 text-lg text-blue-200 flex justify-center">Teams per Region</h3>
            <div className="h-64">
              <Bar data={barData} options={options} />
            </div>
          </div>
        

        {/* Line chart */}
        <div className="bg-slate-900/60 rounded-xl shadow-2xl p-6 border border-amber-400/20">
          <h3 className="h-14 text-lg text-yellow-200 flex justify-center">Average Game Duration per Day</h3>
          <div className="h-64">
            <Line data={durationData} options={options} />
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}
