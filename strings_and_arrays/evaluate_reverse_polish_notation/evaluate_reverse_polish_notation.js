/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	let stack =[]
	for(let i = 0; i < tokens.length; i++){
		if( tokens[i] !== '+' && tokens[i] !== '-' && tokens[i] !== '/' && tokens[i] !== '*' ){
			stack.push(parseInt(tokens[i]))
		}else{
			let num1 = stack.pop()
			let num2 = stack.pop()
			stack.push(eval(num2, num1, tokens[i]))
		}
	}
	return stack.pop()
}

function eval( num1, num2, sign){
	if(sign === '-'){
		return num1 - num2
	}else if(sign === '*'){
		return num1 * num2
	}else if (sign === '+'){
		return num1 + num2
	}else{
		return Math.trunc(num1 / num2)
	}
}

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
