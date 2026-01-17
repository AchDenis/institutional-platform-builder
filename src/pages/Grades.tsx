import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GradeCard } from "@/components/dashboard/GradeCard";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import {
  currentStudent,
  getStudentCourses,
  calculateGPA,
  getCompletedCredits,
  getTotalCredits,
} from "@/data/mockData";
import { TrendingUp, Award, CheckCircle, Clock } from "lucide-react";

const Grades = () => {
  const studentCourses = getStudentCourses(currentStudent.id);
  const gpa = calculateGPA(currentStudent.id);
  const completedCredits = getCompletedCredits(currentStudent.id);
  const totalCredits = getTotalCredits(currentStudent.id);
  const coursesWithGrades = studentCourses.filter((c) => c.grade !== null);
  const coursesPending = studentCourses.filter((c) => c.grade === null);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Situația Școlară
        </h1>
        <p className="text-muted-foreground mt-1">
          Vizualizează notele și progresul tău academic.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Media Generală</p>
                <p className="text-3xl font-bold text-primary">{gpa.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/10 rounded-xl">
                <Award className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Credite Obținute</p>
                <p className="text-3xl font-bold text-foreground">
                  {completedCredits}
                  <span className="text-lg text-muted-foreground font-normal">
                    /{totalCredits}
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 flex justify-center">
            <ProgressRing
              progress={(completedCredits / totalCredits) * 100}
              size={100}
              strokeWidth={8}
              label="Progres"
            />
          </CardContent>
        </Card>
      </div>

      {/* Grades Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graded Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle className="w-5 h-5 text-success" />
              Cursuri Evaluate ({coursesWithGrades.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {coursesWithGrades.length > 0 ? (
              coursesWithGrades.map((course) => (
                <GradeCard
                  key={course.id}
                  courseName={course.name ?? ""}
                  courseCode={course.code ?? ""}
                  grade={course.grade}
                  credits={course.credits ?? 0}
                  examDate={course.examDate}
                />
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Nu ai încă note înregistrate.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Pending Courses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-warning" />
              În Așteptare ({coursesPending.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {coursesPending.length > 0 ? (
              coursesPending.map((course) => (
                <GradeCard
                  key={course.id}
                  courseName={course.name ?? ""}
                  courseCode={course.code ?? ""}
                  grade={course.grade}
                  credits={course.credits ?? 0}
                  examDate={course.examDate}
                />
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Toate cursurile au fost evaluate.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Grades;
