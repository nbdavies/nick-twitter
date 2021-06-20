import React from 'react'
import { ArrowClockwise, Heart, HeartFill } from 'react-bootstrap-icons';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.handleRetweet = this.handleRetweet.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.state = {
      retweeted: this.alreadyRetweeted(),
      liked: this.alreadyLiked(),
      likes: props.tweet.likes.length
    }
  }
  
  render(){
    return(
      <div>
        <hr/>
        <span>{this.props.tweet.user.email} says:</span>
        <p>{this.props.tweet.text}</p>
        {this.state.retweeted
          ? <ArrowClockwise />
          : <a href='#' onClick={this.handleRetweet}><ArrowClockwise /></a>
        }
        {this.state.liked
          ? <HeartFill />
          : <a href='#' onClick={this.handleLike}><Heart /></a>
        }
        {this.state.likes > 0 &&
          <span>{this.state.likes}</span>
        }
      </div>
    )
  }
  
  handleRetweet(event){
    event.preventDefault()
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    fetch('http://localhost:3000/tweets/' + this.props.tweet.id + '/retweet', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
      }
    })
      .then(response => response.json())
      .then(data => {
        this.props.onRetweet(data)
        this.setState(state => (
          {
            retweeted: true,
            liked: state.liked,
            likes: state.likes
          })
        )
      })
    return false;
  }
  
  handleLike(event){
    event.preventDefault()
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    fetch('http://localhost:3000/tweets/' + this.props.tweet.id + '/like', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState(state => (
          { 
            likes: state.likes + 1,
            liked: true,
            retweeted: state.retweeted
          })
        )
      })
    return false;
  }

  alreadyRetweeted(){
    return this.props.tweet.retweet_tweets.some(retweet_tweet =>
      (retweet_tweet.user_id == this.props.user.id)
    )
  }
  
  alreadyLiked(){
    return this.props.tweet.likes.some(like =>
      (like.user_id == this.props.user.id)
    )
  }
}

export default Tweet
