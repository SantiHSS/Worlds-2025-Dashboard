"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

// capitalize
function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// url to breadcrumbs
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
  
  // url /
  const segments = pathname.split("/").filter(Boolean);
  
  // build breadcrumbs
  segments.forEach((segment, index) => {
    const isLastSegment = index === segments.length - 1;
    const path = "/" + segments.slice(0, index + 1).join("/");
    
    breadcrumbs.push({
      label: capitalize(segment),
      href: isLastSegment ? undefined : path, 
    });
  });
  
  return breadcrumbs;
}

// Main component
export default function Breadcrumb() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <nav className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-amber-500/20 px-6 h-16 flex items-center">
      <ol className="flex items-center space-x-2 text-sm text-white">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">

            {/* divide */}
            {index > 0 && (
              <ChevronRight className="mx-2 text-amber-400 w-4 h-4" />
            )}

            {/* Link */}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-amber-300 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-amber-300 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}