const updateStudentGradeByCity = (studentList, city, studentGrade) => {
    if (!Array.isArray(studentList) || !Array.isArray(studentGrade)){
        return []
    }
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const checkGrade = studentGrade.find((grade) => grade.studentId === student.id);
      const grade = checkGrade ? checkGrade.grade : 'N/A';
      return {
        ...studentList,
        grade,
      };
    });
};


export default updateStudentGradeByCity;
