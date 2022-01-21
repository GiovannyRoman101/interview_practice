class MyStack{
	constructor(){
		this.q1 = []
		this.q2 = []
	}

	/** 
	* @param {number} x
	* @return {void}
	*/
	push(x){
		if(this.q1.length === 0 && this.q2.length !== 0){
			this.q2.push(x)
		}else{
			this.q1.push(x)
		}

	}

	/**
	* @return {number}
	*/
	pop(){
		if(this.q1.length === 0 && this.q2.length !== 0){
			while(this.q2.length !==0){
				let temp = this.q2.shift()
				if(this.q2.length !==0){
					this.q1.push(temp)
				}else{
					return temp
				}
			}
		}else{
			while(this.q1.length !==0){
				let temp = this.q1.shift()
				if(this.q1.length !==0){
					this.q2.push(temp)
				}else{
					return temp
				}
			}
		}
	}

	/**
	* @return {number}
	*/
	top(){
		if(this.q1.length === 0 && this.q2.length !== 0){
			while(this.q2.length !==0){
				let temp = this.q2.shift()
				if(this.q2.length !==0){
					this.q1.push(temp)
				}else{
					this.q1.push(temp)
					return temp
				}
			}
		}else{
			while(this.q1.length !==0){
				let temp = this.q1.shift()
				if(this.q1.length !==0){
					this.q2.push(temp)
				}else{
					this.q2.push(temp)
					return temp
				}
			}
		}
	}

	/**
	* @return {boolean}
	*/
	empty(){
		return this.q1.length === 0 && this.q2.length === 0 
	}
}


