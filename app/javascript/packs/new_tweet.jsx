import React from 'react'

class NewTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='text' value={this.state.text} onChange={this.handleChange}/>
        <input type='submit' value='Tweet' />
      </form>
    )
  }
  
  handleSubmit(event) {
    event.preventDefault()
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");

    fetch('http://localhost:3000/tweets', { 
      method: 'POST',
      body: JSON.stringify({ text: this.state.text }),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrf
      }
    })
      .then(response => response.json())
      .then(data => {
        this.props.onCreation(data)
      })
    this.setState({ text: '' })
    return false;
  }

  handleChange(event) {
    this.setState({ text: event.target.value })
  }
}

export default NewTweet;
