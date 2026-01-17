import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { WelcomeHeader } from "@/components/dashboard/WelcomeHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { GradeCard } from "@/components/dashboard/GradeCard";
import { ProgressRing } from "@/components/dashboard/ProgressRing";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Award,
  TrendingUp,
} from "lucide-react";
import {
  currentStudent,
  getStudentCourses,
  calculateGPA,
  getCompletedCredits,
  getTotalCredits,
} from "@/data/mockData";

const Index = () => {
  const studentCourses = getStudentCourses(currentStudent.id);
  const gpa = calculateGPA(currentStudent.id);
  const completedCredits = getCompletedCredits(currentStudent.id);
  const totalCredits = getTotalCredits(currentStudent.id);
  const coursesWithGrades = studentCourses.filter((c) => c.grade !== null).length;
  const progressPercent = totalCredits > 0 ? (completedCredits / totalCredits) * 100 : 0;

  return (
    <DashboardLayout>
      <WelcomeHeader />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title="Media Generală"
          value={gpa.toFixed(2)}
          subtitle="Ponderată pe credite"
          icon={<TrendingUp className="w-5 h-5" />}
          variant="primary"
        />
        <StatsCard
          title="Cursuri Promovate"
          value={`${coursesWithGrades}/${studentCourses.length}`}
          subtitle="Semestrul curent"
          icon={<GraduationCap className="w-5 h-5" />}
          variant="success"
        />
        <StatsCard
          title="Credite Obținute"
          value={completedCredits}
          subtitle={`din ${totalCredits} credite`}
          icon={<Award className="w-5 h-5" />}
          variant="warning"
        />
        <StatsCard
          title="Cursuri Active"
          value={studentCourses.length}
          subtitle="În acest semestru"
          icon={<BookOpen className="w-5 h-5" />}
          variant="default"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Grades Section - Takes 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Notele Tale
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {studentCourses.map((course) => (
                <GradeCard
                  key={course.id}
                  courseName={course.name ?? ""}
                  courseCode={course.code ?? ""}
                  grade={course.grade}
                  credits={course.credits ?? 0}
                  examDate={course.examDate}
                />
              ))}
            </CardContent>
          </Card>

          <RecentActivity />
        </div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Progres Semestru
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center py-4">
              <ProgressRing
                progress={progressPercent}
                size={140}
                strokeWidth={10}
                label="Credite Completate"
                sublabel={`${completedCredits} din ${totalCredits}`}
              />
            </CardContent>
          </Card>

          <UpcomingEvents />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
