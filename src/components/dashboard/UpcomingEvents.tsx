import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Clock } from "lucide-react";

interface Event {
  id: number;
  title: string;
  type: string;
  date: string;
  time: string;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Examen Inteligență Artificială",
    type: "Examen",
    date: "28 Ian 2025",
    time: "09:00",
  },
  {
    id: 2,
    title: "Predare Proiect POO",
    type: "Proiect",
    date: "30 Ian 2025",
    time: "23:59",
  },
  {
    id: 3,
    title: "Laborator Baze de Date",
    type: "Laborator",
    date: "31 Ian 2025",
    time: "14:00",
  },
];

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <CalendarCheck className="w-5 h-5 text-primary" />
          Evenimente Viitoare
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-col items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
              <span className="text-lg font-bold text-primary">
                {event.date.split(" ")[0]}
              </span>
              <span className="text-xs text-primary/80">
                {event.date.split(" ")[1]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">
                {event.title}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                  {event.type}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {event.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
