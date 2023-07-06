"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayStudents = void 0;
// Create the students
var student1 = {
    firstName: "Harry",
    lastName: "Okoli",
    age: 22,
    location: "Lagos",
};
var student2 = {
    firstName: "Oz",
    lastName: "Rumpelstiltskin",
    age: 22,
    location: "New York",
};
// Create an array of students
var studentsList = [
    student1,
    student2,
];
// Styling
var styleSheet = "\n    html {\n      margin: 0;\n      height: 100%;\n    }\n    body {\n      box-sizing: border-box;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 80%;\n      margin: 10%;\n    }\n    table {\n      border-collapse: collapse;\n    }\n    thead {\n      font-weight: bold;\n    }\n    td {\n      padding: 10px;\n      border: 1px solid gray;\n      cursor: pointer;\n    }\n    td:hover {\n      background: gainsboro;\n    }\n  \n    td:nth-child(1) {\n      text-align: center;\n    }\n  ";
/**
 *
 * @param students - The list of students to display.
 */
var displayStudents = function (students) {
    // Create table element
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    var tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', "<td>".concat(student.firstName, "</td>"));
        bodyRow.insertAdjacentHTML('beforeend', "<td>".concat(student.location, "</td>"));
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};
exports.displayStudents = displayStudents;
(0, exports.displayStudents)(studentsList);
var styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
