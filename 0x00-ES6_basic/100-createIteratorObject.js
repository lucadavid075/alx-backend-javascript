export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const department in report.allEmployees) {
        if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
          const employees = report.allEmployees[department];
          for (const employee in employees) {
            if (Object.prototype.hasOwnProperty.call(employees, employee)) {
              yield employees[employee];
            }
          }
        }
      }
    },
  };
}
