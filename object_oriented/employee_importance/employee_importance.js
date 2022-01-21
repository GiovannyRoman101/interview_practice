/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

function Employee(id, importance, subordinates) {
    this.id = id
    this.importance = importance
    this.subordinates = subordinates
}

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    let employee_list = new Map()
    for (let employee of employees) {
        employee_list.set(employee.id, employee)
    }
    function dfs(employeeID ) {
        let employee = employee_list.get(employeeID)
        let importance = employee.importance
        for (let i = 0; i < employee.subordinates.length; i++) {
            importance += dfs(employee.subordinates[i])
        }
        return importance
    }
    return dfs(id)
}
