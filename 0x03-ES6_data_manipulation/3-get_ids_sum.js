/**
 * 
 * @param {*} studentList 
 * @returns  the sum of all the student ids
 */

const getStudentIdsSum = (studentList) => {
    if (!Array.isArray(studentList)) {
        return []
    }

    return studentList.reduce((accumulator, current) => accumulator + current.id, 0)
}

export default getStudentIdsSum;