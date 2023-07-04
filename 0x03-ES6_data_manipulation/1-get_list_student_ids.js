/**
 * @param studentList
 * @returns an array of ids from a list of object
 */

const getListStudentIds = (studentList) => {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.map((student) => student.id);
};
// const getListStudentIds = (studentList) => {
//     if (typeof studentList == 'object') {
//         return studentList.map((student) => student.id);
//     }
//     return []
// }

export default getListStudentIds;
