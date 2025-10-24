"use client";

import { Menu, User } from "lucide-react";
import AppImage from "@/components/AppImage";
import Link from "next/link";


interface TopbarProps {
  onToggleSidebar: () => void;
}

const Topbar = ({ onToggleSidebar }: TopbarProps) => {
  return (
    <header className="bg-slate-900 border-b border-amber-500/30 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left section */}
        <div className="flex items-center gap-4">
          {/* Sidebar toggle (mobile) */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-amber-400 hover:bg-amber-500/20 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all duration-300"
          >
            <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center group-hover:border-cyan-400">
              <AppImage icon="logo" size={28} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                Worlds 2025
              </h1>
              <p className="text-xs text-amber-300/80">League of Legends</p>
            </div>
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-800 border border-amber-400/40 flex items-center justify-center cursor-pointer hover:border-amber-400 transition">
            <User size={18} className="text-amber-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
