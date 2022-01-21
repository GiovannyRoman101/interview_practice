/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
	let stack = []
	let freq = new Map()
	let visited = new Map()

	// mark how many times letters occur
	for(let i = 0; i < s.length; i ++){
		if(!freq.has(s[i])){
			freq.set(s[i], 0)
		}
		freq.set(s[i],  freq.get(s[i])+1)
	}

	for(let i = 0; i < s.length; i ++){
		// if stack is empty, add letter and mark it visited
		if(stack.length === 0){
			stack.push(s[i])
			visited.set(s[i],1)
		}else{

			let top = stack[stack.length -1 ]
			// check if top appears more than once and 
			// the letter appears before top and not visited
			if(freq.get(top) > 0 && s[i] < top && !visited.get(s[i])){

				while(stack.length > 0 && freq.get(top) > 0 && s[i] < top && !visited.get(s[i])){
					let popped = stack.pop()
					// update the top value
					top = stack[stack.length -1]
					// remove it being visited
					visited.set(popped, 0)
				}
				// add to stack and mark it as visited
				stack.push(s[i])
				visited.set(s[i],1)
				// has not visited 
			}else if(!visited.get(s[i])){
				// add to stack and mark it as visited
				stack.push(s[i])
				visited.set(s[i],1)
			}
		}
		// update freq of letter
		freq.set(s[i], freq.get(s[i])-1)
	}
	return stack.join('')
}

console.log(removeDuplicateLetters("bcabc"))
console.log(removeDuplicateLetters("cbacdcbc"))
