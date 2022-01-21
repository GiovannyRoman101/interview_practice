


function alienOrder(words){
	let forward = new Map()
	let reverse = new Map()
	let alphabets = new Set()

	for(let i = 0; i < words.length; i++){
		for( let j = 0; i < words[i].length; j++){
			alphabets.add(words[i][j])
		}
		if(i > 0 ){
			for(let j = 0; words[i-1].length && j < words[i].length;j++){
				if(words[i-1][j] !== words[i][j]){
					if(!forward.has(words[i-1][j])){
						forward.set(words[i-1][j], new Set())
					}
					let temp = forward.get(words[i-1][j])
					temp.add(words[i][j])
					forward.set(words[i-1][j],temp )
					break
				}
			}
		}
	}
}

console.log(alienOrder(['wrt', 'wrf','er','ett','rftt']))
console.log(alienOrder(['z','x']))
console.log(alienOrder(['z','x','z']))