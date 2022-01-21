/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	if(rooms === null || rooms.length === 0){
		return true
	}
	let keys = [0]
	let visited = new Set()
	while(keys.length !== 0){
		let key = keys.pop()
		visited.add(key)
		for(let temp of rooms[key]){
			if(!visited.has(temp)){
				keys.push(temp)
			}
		}
	}

	if(visited.size === rooms.length){
		return true
	}
	return false
}

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]))