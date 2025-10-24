export interface WorldsStats {
  totalTeams: number;
  regions: string[];
  lastChampion: string;
  matchesPerDay: number[];
  teamsPerRegion: { region: string; count: number }[];
}

export interface WorldsDurationStats {
  label: string;
  labels: string[];
  data: number[];
}


// data
export const worlds2025Stats: WorldsStats = {
  totalTeams: 16,
  regions: ['LCK', 'LPL', 'LEC', 'LCS', 'PCS'],
  lastChampion: 'T1',
  matchesPerDay: [10, 12, 8, 14, 16, 9, 6],
  teamsPerRegion: [
    { region: 'LCK', count: 4 },
    { region: 'LPL', count: 3 },
    { region: 'LEC', count: 3 },
    { region: 'LCS', count: 3 },
    { region: 'PCS', count: 3 },
  ],
};

// data 2
export const worlds2025DurationStats: WorldsDurationStats = {
  label: 'Average Game Duration (minutes)',
  labels: ['Oct-16', 'Oct-17', 'Oct-18', 'Oct-19', 'Oct-22', 'Oct-23', 'Oct-24', 'Oct-25'],
  data: [38, 35, 37, 42, 35, 28, 37, 40],
};