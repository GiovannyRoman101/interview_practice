function Node(val, children) {
    this.val = val
    this.children = children === null ? [] : children
}

function divTree(root) {
    if (root === null) {
        return ''
    }

    function dfs(node) {
        if (node === null) {
            return ''
        }
        if (node.innerHtml !== undefined) {
            return `<${node.val}>${node.innerHtml}</${node.val}>`
        }
        let result = `<${node.val}>`
        for (let kid of node.children) {
            result += '\n'+ dfs(kid)
        }
        return result + `\n</${node.val}>`
    }
    return dfs(root)
}

console.log(
    divTree({
        val: 'div',
        children: [
            { innerHtml: 'a', val: 'div' },
            { innerHtml: 'b', val: 'div' },
			{val: 'a', children:[{ innerHtml: 'a', val: 'div' }]}
        ],
    })
)
