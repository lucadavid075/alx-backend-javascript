/**
 *
 * @param {*} studentList
 * @param {*} city
 * @returns an array of objects who are located in a specific city
 */

const getStudentsByLocation = (studentList, city) => {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList.filter((student) => student.location === city);
};

export default getStudentsByLocation;
