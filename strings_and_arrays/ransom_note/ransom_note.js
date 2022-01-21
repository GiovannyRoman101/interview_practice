/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let i = 0; i < magazine.length; i++){
        if(!map.has(magazine[i])){
            map.set(magazine[i], 0)
        }
        let temp = map.get(magazine[i])
		temp++
        map.set(magazine[i], temp)
    }
    for(let i = 0; i < ransomNote.length;i++){
        if(map.has(ransomNote[i])){
            let item = map.get(ransomNote[i])
            if(item === 0){
                return false
            }else{
                item--
                map.set(ransomNote[i],item)
            }
        }else{
			return false
		}
    }
    return true
}

console.log(canConstruct('aa', 'ab'))