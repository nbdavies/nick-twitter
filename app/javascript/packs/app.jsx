import React from 'react'
import ReactDOM from 'react-dom'
import NewTweet from './new_tweet'
import TweetList from './tweet_list'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
    this.handleCreation = this.handleCreation.bind(this);
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/tweets', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => { this.setState({ tweets: data }) })
  }

  render() {
    return(
      <div>
        <h2>Nick Twitter</h2>
        <NewTweet onCreation={this.handleCreation} />
        <TweetList tweets={this.state.tweets} />
      </div>
    )
  }

  handleCreation(tweet){
    this.setState({
      tweets: this.state.tweets.concat(tweet)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
