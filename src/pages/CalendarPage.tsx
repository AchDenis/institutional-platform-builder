import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, BookOpen } from "lucide-react";

interface ScheduleEvent {
  id: number;
  title: string;
  type: "curs" | "laborator" | "seminar" | "examen";
  time: string;
  endTime: string;
  room: string;
  teacher: string;
}

interface DaySchedule {
  day: string;
  events: ScheduleEvent[];
}

const weekSchedule: DaySchedule[] = [
  {
    day: "Luni",
    events: [
      { id: 1, title: "Programare Orientată pe Obiecte", type: "curs", time: "08:00", endTime: "10:00", room: "A305", teacher: "Prof. Dr. Ion Ionescu" },
      { id: 2, title: "Baze de Date", type: "laborator", time: "10:00", endTime: "12:00", room: "Lab B2", teacher: "Conf. Dr. Ana Vasilescu" },
      { id: 3, title: "Structuri de Date", type: "seminar", time: "14:00", endTime: "16:00", room: "C2", teacher: "Lect. Dr. Mihai Stănescu" },
    ],
  },
  {
    day: "Marți",
    events: [
      { id: 4, title: "Rețele de Calculatoare", type: "curs", time: "10:00", endTime: "12:00", room: "A101", teacher: "Prof. Dr. Ion Ionescu" },
      { id: 5, title: "Sisteme de Operare", type: "laborator", time: "14:00", endTime: "16:00", room: "Lab C1", teacher: "Conf. Dr. Ana Vasilescu" },
    ],
  },
  {
    day: "Miercuri",
    events: [
      { id: 6, title: "Inteligență Artificială", type: "curs", time: "08:00", endTime: "10:00", room: "B102", teacher: "Prof. Dr. Ion Ionescu" },
      { id: 7, title: "Programare Orientată pe Obiecte", type: "laborator", time: "12:00", endTime: "14:00", room: "Lab A3", teacher: "Lect. Dr. Mihai Stănescu" },
    ],
  },
  {
    day: "Joi",
    events: [
      { id: 8, title: "Baze de Date", type: "curs", time: "10:00", endTime: "12:00", room: "A305", teacher: "Conf. Dr. Ana Vasilescu" },
      { id: 9, title: "Rețele de Calculatoare", type: "laborator", time: "14:00", endTime: "16:00", room: "Lab B1", teacher: "Prof. Dr. Ion Ionescu" },
    ],
  },
  {
    day: "Vineri",
    events: [
      { id: 10, title: "Structuri de Date și Algoritmi", type: "curs", time: "08:00", endTime: "10:00", room: "C1", teacher: "Lect. Dr. Mihai Stănescu" },
      { id: 11, title: "Inteligență Artificială", type: "seminar", time: "10:00", endTime: "12:00", room: "A201", teacher: "Prof. Dr. Ion Ionescu" },
    ],
  },
];

const typeColors = {
  curs: "bg-primary/10 text-primary",
  laborator: "bg-success/10 text-success",
  seminar: "bg-info/10 text-info",
  examen: "bg-destructive/10 text-destructive",
};

const CalendarPage = () => {
  const today = new Date().toLocaleDateString("ro-RO", { weekday: "long" });
  const capitalizedToday = today.charAt(0).toUpperCase() + today.slice(1);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Orar
        </h1>
        <p className="text-muted-foreground mt-1">
          Vizualizează programul săptămânal și evenimentele viitoare.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Badge className={typeColors.curs}>Curs</Badge>
        <Badge className={typeColors.laborator}>Laborator</Badge>
        <Badge className={typeColors.seminar}>Seminar</Badge>
        <Badge className={typeColors.examen}>Examen</Badge>
      </div>

      {/* Weekly Schedule */}
      <div className="grid grid-cols-1 gap-4">
        {weekSchedule.map((daySchedule) => (
          <Card
            key={daySchedule.day}
            className={
              daySchedule.day === capitalizedToday
                ? "border-primary/50 bg-primary/5"
                : ""
            }
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-primary" />
                {daySchedule.day}
                {daySchedule.day === capitalizedToday && (
                  <Badge variant="secondary" className="ml-2">
                    Astăzi
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {daySchedule.events.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-4 p-3 bg-card rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex flex-col items-center min-w-[60px]">
                      <span className="text-sm font-semibold text-foreground">
                        {event.time}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {event.endTime}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={typeColors[event.type]}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                      </div>
                      <p className="font-medium text-foreground">
                        {event.title}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.room}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          {event.teacher}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;
