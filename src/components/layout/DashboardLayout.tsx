import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="container py-6 px-4 md:px-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
