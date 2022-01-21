
class Message{
	constructor(userId, tweetId){
		this.userId = userId
		this.tweetId = tweetId
		this.data = Date.now()
	}
}

class Twitter {
    constructor() {
		this.feed = []
		this.following = new Map()
	}

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
		let message = new Message(userId,tweetId)
		this.feed.push(message)
		if(!this.following.has(userId)){
			this.following.set(userId,new Set())
		}
		let temp = this.following.get(userId)
		temp.add(userId)
	}
    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
		let result = []
		let following = this.following.get(userId)
		for(let i = this.feed.length-1; i >= 0 && result.length < 10; i-- ){
			let message = this.feed[i]
			if(following.has(message.userId)){
				result.push(message.tweetId)
			}
		}
		return result
	}
    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
		if(!this.following.has(followerId)){
			let set = new Set()
			set.add(followeeId)
			this.following.set(followerId, set)
		}else{
			let set = this.following.get(followerId)
			set.add(followeeId)
		}
	}

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
		if(this.following.has(followerId) && followeeId !== followerId){
			let set = this.following.get(followerId)
			set.delete(followeeId)
			this.following.set(followerId, set)
		}
	}
}

const twitter = new Twitter()
twitter.postTweet(1,5)
twitter.postTweet(1,3)
twitter.postTweet(1,101)
twitter.postTweet(1,13)
twitter.postTweet(1,10)
twitter.postTweet(1,2)
twitter.postTweet(1,94)
twitter.postTweet(1,505)
twitter.postTweet(1,333)
console.log(twitter.getNewsFeed(1))