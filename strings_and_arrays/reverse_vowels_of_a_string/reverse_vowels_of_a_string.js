/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	let arr = s.split('')
	let vowel_indices = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
			vowel_indices.push(i)
		}
		if(arr[i] === 'A' || arr[i] === 'E' || arr[i] === 'I' || arr[i] === 'O' || arr[i] === 'U'){
			vowel_indices.push(i)
		}
	}
	let left = 0
	let right = vowel_indices.length -1
	while(left < right){
		let temp = arr[vowel_indices[left]]
		arr[vowel_indices[left]] = arr[vowel_indices[right]]
		arr[vowel_indices[right]] = temp
		left++
		right--
	}
	return arr.join('')
}

console.log(reverseVowels('hello'))