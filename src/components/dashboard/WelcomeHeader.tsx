import { currentUser, currentStudent, getStudentProgram } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function WelcomeHeader() {
  const program = getStudentProgram(currentStudent.programId);
  const currentDate = new Date().toLocaleDateString("ro-RO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Bună ziua, {currentUser.firstName}! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Iată o privire de ansamblu asupra progresului tău academic.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5">
            <CalendarDays className="w-3.5 h-3.5" />
            {currentDate}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Anul {currentStudent.yearOfStudy}, Grupa {currentStudent.nrGrupa}
          </Badge>
        </div>
      </div>
      
      {program && (
        <div className="mt-4 p-4 bg-card rounded-xl border border-border">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Program de studiu:</span>
              <span className="ml-2 font-medium text-foreground">{program.name}</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div>
              <span className="text-muted-foreground">Nivel:</span>
              <span className="ml-2 font-medium text-foreground">{program.studyLevel}</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div>
              <span className="text-muted-foreground">Nr. Matricol:</span>
              <span className="ml-2 font-medium text-foreground">{currentStudent.registrationNr}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
