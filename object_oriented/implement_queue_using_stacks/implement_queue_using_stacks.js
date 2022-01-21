class MyQueue {
    constructor() {
        this.front = []
        this.back = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.front.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.back.length !== 0) {
            return this.back.pop()
        }
        while (this.front.length !== 0) {
            this.back.push(this.front.pop())
        }
        return this.back.pop()
    }

    /**
     * @return {number}
     */
    peek() {
        if (this.back.length !== 0) {
            return this.back[this.back.length - 1]
        }
		while (this.front.length !== 0) {
            this.back.push(this.front.pop())
        }
		return this.back[this.back.length - 1]
    }
    /**
     * @return {boolean}
     */
    empty() {
        if (this.front.length === 0 && this.back.length === 0) {
            return true
        }
        return false
    }
}
