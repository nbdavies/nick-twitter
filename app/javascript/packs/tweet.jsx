import React from 'react'
import { ArrowClockwise } from 'react-bootstrap-icons';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.handleRetweet = this.handleRetweet.bind(this);
    this.state = { retweeted: this.props.tweet.retweeted }
  }
  
  render(){
    return(
      <div>
        <hr/>
        <span>{this.props.tweet.user.email} says:</span>
        <p>{this.props.tweet.text}</p>
        {this.state.retweeted
          ? <ArrowClockwise />
        : <a href='#' onClick={this.handleRetweet}>
              <ArrowClockwise />
            </a>
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
        this.setState({ retweeted: true })
      })
    return false;
  }
}

export default Tweet
