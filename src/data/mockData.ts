// Mock data for the institutional platform

export interface Student {
  id: number;
  userId: number;
  registrationNr: string;
  nrGrupa: string;
  yearOfStudy: number;
  programId: number;
  status: string;
}

export interface Program {
  id: number;
  name: string;
  studyLevel: string;
  durationYear: number;
}

export interface Course {
  id: number;
  programId: number;
  code: string;
  name: string;
  credits: number;
}

export interface Enrollment {
  id: number;
  studentId: number;
  courseId: number;
}

export interface Grade {
  id: number;
  enrollmentId: number;
  grade: number;
  examDate: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roleId: number;
}

export interface Staff {
  id: number;
  userId: number;
  title: string;
}

// Current logged in student (mock)
export const currentUser: User = {
  id: 1,
  email: "maria.popescu@student.edu.ro",
  firstName: "Maria",
  lastName: "Popescu",
  roleId: 3,
};

export const currentStudent: Student = {
  id: 1,
  userId: 1,
  registrationNr: "STU-2024-001",
  nrGrupa: "3A",
  yearOfStudy: 2,
  programId: 1,
  status: "activ",
};

export const programs: Program[] = [
  { id: 1, name: "Informatică", studyLevel: "Licență", durationYear: 3 },
  { id: 2, name: "Inginerie Software", studyLevel: "Licență", durationYear: 4 },
  { id: 3, name: "Securitate Cibernetică", studyLevel: "Master", durationYear: 2 },
];

export const courses: Course[] = [
  { id: 1, programId: 1, code: "INFO101", name: "Programare Orientată pe Obiecte", credits: 6 },
  { id: 2, programId: 1, code: "INFO102", name: "Structuri de Date și Algoritmi", credits: 5 },
  { id: 3, programId: 1, code: "INFO103", name: "Baze de Date", credits: 6 },
  { id: 4, programId: 1, code: "INFO104", name: "Rețele de Calculatoare", credits: 5 },
  { id: 5, programId: 1, code: "INFO105", name: "Sisteme de Operare", credits: 5 },
  { id: 6, programId: 1, code: "INFO106", name: "Inteligență Artificială", credits: 6 },
];

export const enrollments: Enrollment[] = [
  { id: 1, studentId: 1, courseId: 1 },
  { id: 2, studentId: 1, courseId: 2 },
  { id: 3, studentId: 1, courseId: 3 },
  { id: 4, studentId: 1, courseId: 4 },
  { id: 5, studentId: 1, courseId: 5 },
  { id: 6, studentId: 1, courseId: 6 },
];

export const grades: Grade[] = [
  { id: 1, enrollmentId: 1, grade: 9, examDate: "2025-01-15" },
  { id: 2, enrollmentId: 2, grade: 10, examDate: "2025-01-18" },
  { id: 3, enrollmentId: 3, grade: 8, examDate: "2025-01-20" },
  { id: 4, enrollmentId: 4, grade: 7, examDate: "2025-01-22" },
  { id: 5, enrollmentId: 5, grade: 9, examDate: "2025-01-25" },
  // Course 6 doesn't have a grade yet
];

export const staff: Staff[] = [
  { id: 1, userId: 10, title: "Prof. Dr." },
  { id: 2, userId: 11, title: "Conf. Dr." },
  { id: 3, userId: 12, title: "Lect. Dr." },
];

export const teachers: User[] = [
  { id: 10, email: "ion.ionescu@edu.ro", firstName: "Ion", lastName: "Ionescu", roleId: 2 },
  { id: 11, email: "ana.vasilescu@edu.ro", firstName: "Ana", lastName: "Vasilescu", roleId: 2 },
  { id: 12, email: "mihai.stanescu@edu.ro", firstName: "Mihai", lastName: "Stănescu", roleId: 2 },
];

// Helper functions
export const getStudentCourses = (studentId: number) => {
  const studentEnrollments = enrollments.filter(e => e.studentId === studentId);
  return studentEnrollments.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.courseId);
    const grade = grades.find(g => g.enrollmentId === enrollment.id);
    return {
      ...course,
      enrollmentId: enrollment.id,
      grade: grade?.grade ?? null,
      examDate: grade?.examDate ?? null,
    };
  });
};

export const getStudentProgram = (programId: number) => {
  return programs.find(p => p.id === programId);
};

export const calculateGPA = (studentId: number) => {
  const studentCourses = getStudentCourses(studentId);
  const gradedCourses = studentCourses.filter(c => c.grade !== null);
  if (gradedCourses.length === 0) return 0;
  
  const totalWeighted = gradedCourses.reduce((sum, c) => sum + (c.grade! * (c.credits ?? 0)), 0);
  const totalCredits = gradedCourses.reduce((sum, c) => sum + (c.credits ?? 0), 0);
  
  return totalCredits > 0 ? totalWeighted / totalCredits : 0;
};

export const getCompletedCredits = (studentId: number) => {
  const studentCourses = getStudentCourses(studentId);
  return studentCourses
    .filter(c => c.grade !== null && c.grade >= 5)
    .reduce((sum, c) => sum + (c.credits ?? 0), 0);
};

export const getTotalCredits = (studentId: number) => {
  const studentCourses = getStudentCourses(studentId);
  return studentCourses.reduce((sum, c) => sum + (c.credits ?? 0), 0);
};
