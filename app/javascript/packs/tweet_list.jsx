import React from 'react'
import Tweet from './tweet'

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRetweet = this.handleRetweet.bind(this);
  }
  
  render(){
    return(
      <div>
        {this.props.tweets.map(tweet => (
          <Tweet tweet={tweet} key={tweet.id} onRetweet={this.handleRetweet}/>
        ))}
      </div>
    )
  }
  
  handleRetweet(retweet) {
    this.props.onCreation(retweet)
  }
}

export default TweetList
