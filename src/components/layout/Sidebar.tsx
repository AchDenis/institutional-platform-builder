import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  FileText,
  Calendar,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
} from "lucide-react";
import { currentUser } from "@/data/mockData";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Cursuri", href: "/courses", icon: BookOpen },
  { name: "Note", href: "/grades", icon: GraduationCap },
  { name: "Documente", href: "/documents", icon: FileText },
  { name: "Calendar", href: "/calendar", icon: Calendar },
];

const bottomNav = [
  { name: "Setări", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-sidebar text-sidebar-foreground transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">EduPortal</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-2 rounded-lg hover:bg-sidebar-accent transition-colors",
            collapsed && "mx-auto"
          )}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                collapsed && "justify-center px-2"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="px-2 py-4 space-y-1 border-t border-sidebar-border">
        {bottomNav.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                collapsed && "justify-center px-2"
              )}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="px-2 py-4 border-t border-sidebar-border">
        <div
          className={cn(
            "flex items-center gap-3 px-3 py-2",
            collapsed && "justify-center px-2"
          )}
        >
          <div className="w-9 h-9 rounded-full bg-sidebar-accent flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {currentUser.firstName} {currentUser.lastName}
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                Student
              </p>
            </div>
          )}
          {!collapsed && (
            <button className="p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
