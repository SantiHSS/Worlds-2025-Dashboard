import { Earth } from 'lucide-react';
import React from 'react';
export interface Region {
  id: number;
  name: string;
  teamsCount: number;
  icon: React.ReactNode; 
}

export const regionsMock: Region[] = [
  { id: 1, name: 'LCK', teamsCount: 4, icon: <Earth /> },
  { id: 2, name: 'LEC', teamsCount: 3, icon: <Earth /> },
  { id: 3, name: 'LCS', teamsCount: 3, icon: <Earth /> },
  { id: 4, name: 'LPL', teamsCount: 3, icon: <Earth /> },
  { id: 5, name: 'PCS', teamsCount: 3, icon: <Earth /> },

];
