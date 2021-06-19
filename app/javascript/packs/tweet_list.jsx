import React from 'react'
import Tweet from './tweet'

class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <div>
        {this.props.tweets.map(tweet => (
          <Tweet tweet={tweet} key={tweet.id}/>
        ))}
      </div>
    )
  }
}

export default TweetList
