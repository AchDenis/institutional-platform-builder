// Mock data for the institutional platform - ETTI TUIASI

export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roleId: number;
}

export interface Program {
  id: number;
  name: string;
  studyLevel: string;
  durationYear: number;
}

export interface Student {
  id: number;
  userId: number;
  registrationNr: number;
  nrGrupa: string;
  yearOfStudy: number;
  programId: number;
  status: string;
}

export interface Staff {
  id: number;
  userId: number;
  title: string;
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

export interface TeacherCourse {
  teacherId: number;
  courseId: number;
  programId: number;
  teaching: number;
}

// Roles
export const roles: Role[] = [
  { id: 1, name: "Professor" },
  { id: 2, name: "Student" },
  { id: 3, name: "Administrator" },
];

// Users
export const users: User[] = [
  { id: 1, email: "nelu.bejan@student.etti.tuiasi.ro", firstName: "Adrian", lastName: "Bejan", roleId: 2 },
  { id: 2, email: "denis.achiritoaiei@student.etti.tuiasi.ro", firstName: "Denis", lastName: "Achiritoaiei", roleId: 2 },
  { id: 3, email: "alexandru.focsaneanu@student.etti.tuiasi.ro", firstName: "Alexandru", lastName: "Focsaneanu", roleId: 2 },
  { id: 4, email: "alberteinstein@etti.tuiasi.ro", firstName: "Albert", lastName: "Einstein", roleId: 1 },
  { id: 5, email: "nicumihai@etti.tuiasi.ro", firstName: "Mihai", lastName: "Nicu", roleId: 1 },
  { id: 6, email: "andrei.popescu@student.etti.tuiasi.ro", firstName: "Andrei", lastName: "Popescu", roleId: 2 },
  { id: 7, email: "george.marinescu@student.etti.tuiasi.ro", firstName: "George", lastName: "Marinescu", roleId: 2 },
  { id: 8, email: "alina.barbulescu@student.etti.tuiasi.ro", firstName: "Alina", lastName: "Barbulescu", roleId: 2 },
  { id: 9, email: "ioana.dumitru@student.etti.tuiasi.ro", firstName: "Ioana", lastName: "Dumitru", roleId: 2 },
  { id: 10, email: "maria.ursu@student.etti.tuiasi.ro", firstName: "Maria", lastName: "Ursu", roleId: 2 },
  { id: 11, email: "vlad.stefan@student.etti.tuiasi.ro", firstName: "Vlad", lastName: "Stefan", roleId: 2 },
  { id: 12, email: "raluca.hodor@student.etti.tuiasi.ro", firstName: "Raluca", lastName: "Hodor", roleId: 2 },
  { id: 13, email: "george.enache@student.etti.tuiasi.ro", firstName: "George", lastName: "Enache", roleId: 2 },
  { id: 14, email: "andreea.popescu@student.etti.tuiasi.ro", firstName: "Andreea", lastName: "Popescu", roleId: 2 },
  { id: 15, email: "vasile.ilie@etti.tuiasi.ro", firstName: "Vasile", lastName: "Ilie", roleId: 1 },
  { id: 16, email: "florin.marin@etti.tuiasi.ro", firstName: "Florin", lastName: "Marin", roleId: 1 },
  { id: 17, email: "cristina.balan@etti.tuiasi.ro", firstName: "Cristina", lastName: "Balan", roleId: 1 },
  { id: 18, email: "monica.neagu@etti.tuiasi.ro", firstName: "Monica", lastName: "Neagu", roleId: 1 },
];

// Programs
export const programs: Program[] = [
  { id: 1, name: "Electronica Telecomunicatii si Tehnologia Informatiilor", studyLevel: "licenta", durationYear: 2 },
  { id: 2, name: "Electronica Aplicata", studyLevel: "licenta", durationYear: 2 },
  { id: 3, name: "Tehnologii si Sisteme de Telecomunicatii", studyLevel: "licenta", durationYear: 2 },
  { id: 4, name: "SAEA", studyLevel: "master", durationYear: 2 },
  { id: 5, name: "RC", studyLevel: "master", durationYear: 2 },
  { id: 6, name: "TMPS", studyLevel: "master", durationYear: 2 },
  { id: 7, name: "SEIII", studyLevel: "master", durationYear: 2 },
  { id: 8, name: "AECS", studyLevel: "master", durationYear: 2 },
  { id: 9, name: "IT4T", studyLevel: "master", durationYear: 2 },
];

// Students
export const students: Student[] = [
  { id: 1, userId: 1, registrationNr: 2194, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 2, userId: 2, registrationNr: 2195, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 3, userId: 3, registrationNr: 2221, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 4, userId: 6, registrationNr: 2301, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 5, userId: 7, registrationNr: 2302, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 6, userId: 8, registrationNr: 2303, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 7, userId: 9, registrationNr: 2304, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 8, userId: 10, registrationNr: 2305, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 9, userId: 11, registrationNr: 2306, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
  { id: 10, userId: 12, registrationNr: 2307, nrGrupa: "56it4t", yearOfStudy: 2, programId: 9, status: "active" },
];

// Staff (Professors)
export const staff: Staff[] = [
  { id: 1, userId: 4, title: "Profesor Java" },
  { id: 2, userId: 5, title: "Laborant DWPI" },
  { id: 3, userId: 6, title: "Profesor Fizica Aplicata" },
  { id: 4, userId: 9, title: "Guest Lecturer – Cosmologie" },
];

// Courses
export const courses: Course[] = [
  { id: 1, programId: 9, code: "IT4T101", name: "Databases, Web Programming and Interfacing", credits: 5 },
  { id: 2, programId: 9, code: "IT4T102", name: "Machine Learning", credits: 6 },
  { id: 3, programId: 9, code: "IT4T103", name: "Programare JAVA", credits: 5 },
  { id: 7, programId: 8, code: "STTI", name: "Sisteme de televiziune si tranmitere imagini", credits: 5 },
  { id: 201, programId: 6, code: "DOMO", name: "Domotica", credits: 6 },
  { id: 202, programId: 6, code: "TCSM", name: "Tehnici de compresie a semnalelor multimedia", credits: 6 },
  { id: 203, programId: 6, code: "JAVA", name: "Programare Java", credits: 5 },
  { id: 208, programId: 6, code: "RS", name: "Retele de senzori", credits: 6 },
  { id: 601, programId: 9, code: "DWPI", name: "Databases, Web Programming and Interfacing", credits: 5 },
  { id: 602, programId: 9, code: "ML", name: "Machine Learning", credits: 5 },
  { id: 603, programId: 9, code: "HACS", name: "Hardware Acceleration for Communication System", credits: 5 },
  { id: 604, programId: 9, code: "APCS", name: "Advanced Programming for Communication System", credits: 5 },
  { id: 606, programId: 9, code: "SHIOT", name: "Smart Home and Internet of Things", credits: 4 },
];

// Enrollments
export const enrollments: Enrollment[] = [
  // Student 1
  { id: 1, studentId: 1, courseId: 1 },
  { id: 2, studentId: 1, courseId: 2 },
  { id: 3, studentId: 1, courseId: 3 },
  // Student 2
  { id: 4, studentId: 2, courseId: 1 },
  { id: 5, studentId: 2, courseId: 2 },
  { id: 6, studentId: 2, courseId: 3 },
  // Student 3
  { id: 7, studentId: 3, courseId: 1 },
  { id: 8, studentId: 3, courseId: 2 },
  { id: 9, studentId: 3, courseId: 3 },
  // Student 4
  { id: 10, studentId: 4, courseId: 1 },
  { id: 11, studentId: 4, courseId: 2 },
  { id: 12, studentId: 4, courseId: 3 },
  // Student 5
  { id: 13, studentId: 5, courseId: 1 },
  { id: 14, studentId: 5, courseId: 2 },
  { id: 15, studentId: 5, courseId: 3 },
  // Student 6
  { id: 16, studentId: 6, courseId: 1 },
  { id: 17, studentId: 6, courseId: 2 },
  { id: 18, studentId: 6, courseId: 3 },
  // Student 7
  { id: 19, studentId: 7, courseId: 1 },
  { id: 20, studentId: 7, courseId: 2 },
  { id: 21, studentId: 7, courseId: 3 },
  // Student 8
  { id: 22, studentId: 8, courseId: 1 },
  { id: 23, studentId: 8, courseId: 2 },
  { id: 24, studentId: 8, courseId: 3 },
  // Student 9
  { id: 25, studentId: 9, courseId: 1 },
  { id: 26, studentId: 9, courseId: 2 },
  { id: 27, studentId: 9, courseId: 3 },
  // Student 10
  { id: 28, studentId: 10, courseId: 1 },
  { id: 29, studentId: 10, courseId: 2 },
  { id: 30, studentId: 10, courseId: 3 },
];

// Grades
export const grades: Grade[] = [
  // Student 1
  { id: 1, enrollmentId: 1, grade: 9, examDate: "2024-01-20" },
  { id: 2, enrollmentId: 2, grade: 8, examDate: "2024-01-21" },
  { id: 3, enrollmentId: 3, grade: 10, examDate: "2024-01-22" },
  // Student 2
  { id: 4, enrollmentId: 4, grade: 7, examDate: "2024-01-20" },
  { id: 5, enrollmentId: 5, grade: 9, examDate: "2024-01-21" },
  { id: 6, enrollmentId: 6, grade: 8, examDate: "2024-01-22" },
  // Student 3
  { id: 7, enrollmentId: 7, grade: 6, examDate: "2024-01-20" },
  { id: 8, enrollmentId: 8, grade: 7, examDate: "2024-01-21" },
  { id: 9, enrollmentId: 9, grade: 9, examDate: "2024-01-22" },
  // Student 4
  { id: 10, enrollmentId: 10, grade: 9, examDate: "2024-02-01" },
  { id: 11, enrollmentId: 11, grade: 8, examDate: "2024-02-02" },
  { id: 12, enrollmentId: 12, grade: 7, examDate: "2024-02-03" },
  // Student 5
  { id: 13, enrollmentId: 13, grade: 10, examDate: "2024-02-01" },
  { id: 14, enrollmentId: 14, grade: 9, examDate: "2024-02-02" },
  { id: 15, enrollmentId: 15, grade: 8, examDate: "2024-02-03" },
  // Student 6
  { id: 16, enrollmentId: 16, grade: 6, examDate: "2024-02-01" },
  { id: 17, enrollmentId: 17, grade: 7, examDate: "2024-02-02" },
  { id: 18, enrollmentId: 18, grade: 8, examDate: "2024-02-03" },
  // Student 7
  { id: 19, enrollmentId: 19, grade: 9, examDate: "2024-02-01" },
  { id: 20, enrollmentId: 20, grade: 10, examDate: "2024-02-02" },
  { id: 21, enrollmentId: 21, grade: 9, examDate: "2024-02-03" },
  // Student 8
  { id: 22, enrollmentId: 22, grade: 8, examDate: "2024-02-01" },
  { id: 23, enrollmentId: 23, grade: 7, examDate: "2024-02-02" },
  { id: 24, enrollmentId: 24, grade: 9, examDate: "2024-02-03" },
  // Student 9
  { id: 25, enrollmentId: 25, grade: 9, examDate: "2024-02-01" },
  { id: 26, enrollmentId: 26, grade: 6, examDate: "2024-02-02" },
  { id: 27, enrollmentId: 27, grade: 8, examDate: "2024-02-03" },
  // Student 10
  { id: 28, enrollmentId: 28, grade: 10, examDate: "2024-02-01" },
  { id: 29, enrollmentId: 29, grade: 9, examDate: "2024-02-02" },
  { id: 30, enrollmentId: 30, grade: 9, examDate: "2024-02-03" },
];

// Teacher Courses
export const teacherCourses: TeacherCourse[] = [
  { teacherId: 1, courseId: 1, programId: 9, teaching: 1 },
  { teacherId: 1, courseId: 2, programId: 9, teaching: 1 },
  { teacherId: 2, courseId: 3, programId: 9, teaching: 1 },
  { teacherId: 3, courseId: 601, programId: 9, teaching: 1 },
  { teacherId: 3, courseId: 603, programId: 9, teaching: 1 },
  { teacherId: 4, courseId: 602, programId: 9, teaching: 1 },
  { teacherId: 4, courseId: 606, programId: 9, teaching: 1 },
];

// Current logged in student (mock) - Adrian Bejan
export const currentUser: User = users[0];

export const currentStudent: Student = students[0];

// Helper functions
export const getUserById = (userId: number) => {
  return users.find(u => u.id === userId);
};

export const getStudentByUserId = (userId: number) => {
  return students.find(s => s.userId === userId);
};

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

export const getCourseTeacher = (courseId: number) => {
  const tc = teacherCourses.find(tc => tc.courseId === courseId);
  if (!tc) return null;
  const staffMember = staff.find(s => s.id === tc.teacherId);
  if (!staffMember) return null;
  const user = users.find(u => u.id === staffMember.userId);
  return user ? { ...user, title: staffMember.title } : null;
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

export const getAllStudents = () => {
  return students.map(student => {
    const user = users.find(u => u.id === student.userId);
    const program = programs.find(p => p.id === student.programId);
    return {
      ...student,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      programName: program?.name,
    };
  });
};
