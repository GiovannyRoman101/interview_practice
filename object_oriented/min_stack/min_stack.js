class MinStack {
    constructor() {
        this.stack = []
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push({
            val: val,
            min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
        })
    }
    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min
    }
}
