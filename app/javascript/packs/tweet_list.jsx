import React from 'react'
import Tweet from './tweet'

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRetweet = this.handleRetweet.bind(this);
    this.state = { user: null }
  }

  componentDidMount(){
    let user = JSON.parse(document.getElementById('user').getAttribute('data-user'))
    this.setState({
      user: user
    })
  }
  
  render(){
    return(
      <div>
        {this.props.tweets.map(tweet => (
          <Tweet tweet={tweet} user={this.state.user} key={tweet.id} onRetweet={this.handleRetweet}/>
        ))}
      </div>
    )
  }
  
  handleRetweet(retweet) {
    this.props.onCreation(retweet)
  }
}

export default TweetList
