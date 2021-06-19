import React from 'react'

class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <div>
        <hr/>
        <span>{this.props.tweet.user.email} says:</span>
        <p>{this.props.tweet.text}</p>
      </div>
    )
  }
}

export default Tweet
