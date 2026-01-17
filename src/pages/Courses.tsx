import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, User, Award } from "lucide-react";
import { currentStudent, getStudentCourses, getCourseTeacher } from "@/data/mockData";

const Courses = () => {
  const studentCourses = getStudentCourses(currentStudent.id);

  // Get teachers for courses from the database
  const coursesWithTeachers = studentCourses.map((course, index) => {
    const teacher = getCourseTeacher(course.id ?? 0);
    return {
      ...course,
      teacher: teacher,
      schedule: ["Luni 10:00-12:00", "Marți 14:00-16:00", "Miercuri 08:00-10:00", "Joi 12:00-14:00", "Vineri 10:00-12:00", "Luni 14:00-16:00"][index],
      room: ["C2", "A305", "B102", "C1", "A201", "B303"][index],
    };
  });

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Cursurile Mele
        </h1>
        <p className="text-muted-foreground mt-1">
          Vizualizează toate cursurile la care ești înscris în acest semestru.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coursesWithTeachers.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {course.code}
                  </Badge>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold">{course.credits}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {course.teacher && (
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>
                      {course.teacher.title} {course.teacher.firstName} {course.teacher.lastName}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{course.schedule}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>Sala {course.room}</span>
                </div>
              </div>

              {course.grade !== null && (
                <div className="pt-3 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Nota obținută</span>
                    <Badge 
                      variant={course.grade >= 7 ? "default" : "secondary"}
                      className={course.grade >= 9 ? "bg-success hover:bg-success/90" : course.grade >= 7 ? "bg-info hover:bg-info/90" : ""}
                    >
                      {course.grade}/10
                    </Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Courses;
