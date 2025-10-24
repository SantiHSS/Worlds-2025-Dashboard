import Link from "next/link";
import { ReactNode } from "react";

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function SidebarLink({ href, label, icon, isActive }: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`group flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all
        ${isActive 
          ? "bg-amber-500/20 text-amber-300 shadow" 
          : "text-slate-300 hover:bg-slate-700 hover:text-white"}`
      }
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  );
}
