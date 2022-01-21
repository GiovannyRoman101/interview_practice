/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let graph = new Map()
    let emailToNames = new Map()
    let visited = new Set()
    let results = []

    // build a graph
    // email to names keeps track of which email belongs to each person
    for (let account of accounts) {
        let name = account[0]
        for (let i = 1; i < account.length; i++) {
            if (!graph.has(account[i])) {
                graph.set(account[i], new Set())
            }
            emailToNames.set(account[i], name)
            if (i === 1) {
                continue
            }
            graph.set(account[i], graph.get(account[i]).add(account[i - 1]))
            graph.set(account[i - 1], graph.get(account[i - 1]).add(account[i]))
        }
    }

    function dfs(mail, list) {
        list.push(mail)
        visited.add(mail)

        for (let mailArray of graph.get(mail)) {
            if (!visited.has(mailArray)) {
                list = dfs(mailArray, list)
            }
        }
        return list
    }
    // dfs on the email and mark when visited
    for (let mail of emailToNames.keys()) {
        if (!visited.has(mail)) {
            // dfs gets called with starting email and a list with the person appended to it
            let list = dfs(mail, [emailToNames.get(mail)])
            list.sort()
            results.push(list)
        }
    }

    return results
}

let arr = [
    ['John', 'johnsmith@mail.com', 'john00@mail.com'],
    ['John', 'johnnybravo@mail.com'],
    ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
    ['Mary', 'mary@mail.com'],
]

console.log(accountsMerge(arr))
