import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, FileText, GraduationCap, Bell } from "lucide-react";

interface Activity {
  id: number;
  type: "grade" | "document" | "announcement" | "deadline";
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: 1,
    type: "grade",
    title: "Notă nouă adăugată",
    description: "Sisteme de Operare - Nota 9",
    time: "Acum 2 ore",
  },
  {
    id: 2,
    type: "announcement",
    title: "Anunț de la secretariat",
    description: "Depunerea cererilor pentru bursă",
    time: "Ieri",
  },
  {
    id: 3,
    type: "deadline",
    title: "Termen limită apropiat",
    description: "Proiect Baze de Date - 3 zile rămase",
    time: "Acum 3 zile",
  },
  {
    id: 4,
    type: "document",
    title: "Document nou disponibil",
    description: "Orar semestrul II 2024-2025",
    time: "Săptămâna trecută",
  },
];

const iconMap = {
  grade: GraduationCap,
  document: FileText,
  announcement: Bell,
  deadline: Clock,
};

const colorMap = {
  grade: "text-success bg-success/10",
  document: "text-info bg-info/10",
  announcement: "text-warning bg-warning/10",
  deadline: "text-destructive bg-destructive/10",
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Activitate Recentă</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = iconMap[activity.type];
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className={`p-2 rounded-lg ${colorMap[activity.type]}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground">
                  {activity.title}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {activity.description}
                </p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
