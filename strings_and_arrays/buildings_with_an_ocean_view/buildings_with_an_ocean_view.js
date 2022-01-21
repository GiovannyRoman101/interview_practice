

function buildings_with_ocean_view(buildings){
	let view = []
	let stack = []
	for(let i = buildings.length -1 ; i >= 0; i--){
		while(stack.length !==0){
			if(buildings[i] > stack[stack.length-1]){
				stack.pop()
			}else{
				break
			}
		}
		if(stack.length === 0){
			view.unshift(i)
		}
		stack.push(buildings[i])
	}
	return view
}

console.log(buildings_with_ocean_view([4,2,3,1]))
console.log(buildings_with_ocean_view([4,3,2,1]))
console.log(buildings_with_ocean_view([1,3,2,4]))
console.log(buildings_with_ocean_view([2,2,2,2]))