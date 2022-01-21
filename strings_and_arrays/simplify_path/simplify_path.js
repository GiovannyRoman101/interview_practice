/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	let result = '/'
	let arr = path.split('/')
	
	let stack = []
	while(arr.length !==0){
		let val = arr.shift()
		if(val === '' || val === '.'){
			continue
		}else if(val === '..'){
			stack.pop()
		}else{
			stack.push(val)
		}
	}
	console.log(stack)
	for(let i =0; i < stack.length; i++){
		if(i === stack.length-1){
			result+= stack[i]
		}else{
			result+= stack[i]+'/'
		}
	}
	return result
}

console.log(simplifyPath('/home/'))

console.log(simplifyPath('/../'))

console.log(simplifyPath('/home//foo/'))

console.log(simplifyPath('/a/./b/../../c/'))