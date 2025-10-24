"use client";

import { usePathname } from "next/navigation";
import { User, Users, Globe2, BarChart3, Mail } from "lucide-react";
import SidebarLink from "./SidebarLink";


interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { href: "/about", label: "About", icon: <User /> },
    { href: "/teams", label: "Teams", icon: <Users /> },
    { href: "/regions", label: "Regions", icon: <Globe2 /> },
    { href: "/stats", label: "Stats", icon: <BarChart3 /> },
    { href: "/contact", label: "Contact", icon: <Mail /> },
  ];

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-full min-h-screen w-64 bg-slate-900 shadow-lg transition-transform duration-300 flex flex-col
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:sticky lg:top-0`}
      >

        <nav className="mt-6 px-3 flex-1 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isActive={pathname === item.href}
              onClick={onToggle}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
