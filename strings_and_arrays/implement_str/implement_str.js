/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if(needle.length === 0){
		return 0
	}
	for(let i =0; i < haystack.length; i++){
		if(haystack[i] === needle[0]){
			for(let j = 0; j <= needle.length; j++){
				if( j === needle.length){
					return i
				}else if(i + j >= haystack.length){
					return -1
				}
				if(haystack[i+j] === needle[j]){
					continue
				}else {
					break
				}
			}
		}
	}
	return -1
}

console.log(strStr("a","a"))