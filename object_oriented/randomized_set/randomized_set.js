class RandomizedSet{
	constructor(){
		this.set = new Set()
	}

	/** 
	* @param {number} val
	* @return {boolean}
	*/
	insert(val){
		if(this.set.has(val)){
			return false
		}
		this.set.add(val)
	}

	
	/** 
	* @param {number} val
	* @return {boolean}
	*/
	remove(val){
		if(this.set.has(val)){
			this.set.delete(val)
			return true
		}
		return false

	}

	/**
	* @return {number}
	*/
	getRandom(){
		let number = Math.floor(Math.random() * this.set.size)
		let count = 0
		for(let val of this.set.values()){
			if ( count === number){
				return val
			}
			count ++
		}
		return -1
	}
}
