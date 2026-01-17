import { cn } from "@/lib/utils";

interface GradeCardProps {
  courseName: string;
  courseCode: string;
  grade: number | null;
  credits: number;
  examDate: string | null;
}

function getGradeColor(grade: number | null) {
  if (grade === null) return "text-muted-foreground bg-muted";
  if (grade >= 9) return "text-grade-excellent bg-grade-excellent/10";
  if (grade >= 7) return "text-grade-good bg-grade-good/10";
  if (grade >= 5) return "text-grade-average bg-grade-average/10";
  return "text-grade-poor bg-grade-poor/10";
}

function getGradeLabel(grade: number | null) {
  if (grade === null) return "În așteptare";
  if (grade >= 9) return "Excelent";
  if (grade >= 7) return "Bine";
  if (grade >= 5) return "Satisfăcător";
  return "Nesatisfăcător";
}

export function GradeCard({
  courseName,
  courseCode,
  grade,
  credits,
  examDate,
}: GradeCardProps) {
  return (
    <div className="group flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
            {courseCode}
          </span>
          <span className="text-xs text-muted-foreground">
            {credits} credite
          </span>
        </div>
        <h3 className="font-medium text-foreground truncate">{courseName}</h3>
        {examDate && (
          <p className="text-xs text-muted-foreground mt-1">
            Examen: {new Date(examDate).toLocaleDateString("ro-RO")}
          </p>
        )}
      </div>
      <div className="flex flex-col items-end gap-1 ml-4">
        <div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-105",
            getGradeColor(grade)
          )}
        >
          {grade ?? "—"}
        </div>
        <span
          className={cn(
            "text-xs font-medium",
            grade === null ? "text-muted-foreground" : getGradeColor(grade).split(" ")[0]
          )}
        >
          {getGradeLabel(grade)}
        </span>
      </div>
    </div>
  );
}
