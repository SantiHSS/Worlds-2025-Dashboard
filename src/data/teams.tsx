export interface Team {
  id: number;
  name: string;
  region: string;
  logo: string;
}

export const teamsMock: Team[] = [
  // LCK (Korea)
  { id: 1, name: "T1", region: "LCK", logo: "/logos/t1.png" },
  { id: 2, name: "Gen.G", region: "LCK", logo: "/logos/geng.png" },
  { id: 3,  name: "Hanwha Life Esports",  region: "LCK",  logo: "/logos/hanwha.png" },
  { id: 4, name: "KT Rolster", region: "LCK", logo: "/logos/kt.png" },

  // LPL (China)
  { id: 5, name: "Bilibili Gaming", region: "LPL", logo: "/logos/blg.png"},
  { id: 6, name: "Top Esports", region: "LPL", logo: "/logos/top.png" },
  { id: 7, name: "Anyone’s Legend", region: "LPL", logo: "/logos/al.png" },

  // LEC (Europe)
  { id: 8, name: "G2 Esports", region: "LEC", logo: "/logos/g2.png" },
  { id: 9, name: "Movistar KOI", region: "LEC", logo: "/logos/koi.png" },
  { id: 10, name: "Fnatic", region: "LEC", logo: "/logos/fnatic.png" },

  // LCS / LTA (America)
  { id: 11, name: "FlyQuest", region: "LCS", logo: "/logos/fly.png" },
  { id: 12, name: "Vivo Keyd Stars", region: "LCS", logo: "/logos/vivo.png" },
  { id: 13, name: "100 Thieves", region: "LCS", logo: "/logos/100.png" },

  // PCS (Asia-Pacific)
  { id: 14, name: "CTBC Flying Oyster", region: "PCS", logo: "/logos/cfo.png" },
  { id: 15, name: "PSG Talon", region: "PCS", logo: "/logos/psg.png" },
  { id: 16, name: "Team Secret Whales", region: "PCS", logo: "/logos/whales.png" },
];
