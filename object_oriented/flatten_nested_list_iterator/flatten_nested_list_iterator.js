class NestedIterator {
	/**
	* @constructor
	* @param {NestedInteger[]} nestedList
	*/
	constructor(nestedList){
		this.nestedList = nestedList
	}

	/**
	* @this NestedIterator
	* @returns {boolean}
	*/
	hasNext(){
		if(this.nestedList === null || this.nestedList.length === 0){
			return false
		}
		return true
	}
	/**
	* @this NestedIterator
	* @returns {integer}
	*/
	next(){
		if(this.hasNext()){
			if(typeof this.nestedList[0] === 'number'){
				return this.nestedList.shift()
			}else{
				while(typeof this.nestedList[0] !== 'number'){
					let list = this.nestedList.shift()
					this.nestedList.unshift(...list)
				}
				return this.nestedList.shift()
			}
		}
		return null
	}
}


/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

let temp = new NestedIterator([[1,1],2,[1,1]])
console.log(temp.next())
console.log(temp.next())
console.log(temp.next())