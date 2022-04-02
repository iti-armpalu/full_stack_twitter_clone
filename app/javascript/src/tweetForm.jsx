// tweetForm.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faImage } from '@fortawesome/free-solid-svg-icons';


import './home.scss';

class TweetForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      error: '',
      tweets: [],
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  postTweet = (e) => {
    e.preventDefault();

    // Why FormData? - The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values
    // let formData = new FormData()

    // The append() method of the FormData interface appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist. Synatx: formData.append(name, value);
    // Note: FormData will only use input fields that use the name attribute.

    // formData.append('tweet[message]', this.state.msg);

  

    fetch('/api/tweets', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        tweet: {
          username: this.state.username,
          message: this.state.msg,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        console.log("This worked")
        this.setState({ 
          msg: '' 
        })
        this.getAllTweets()
      })
      .catch(error => {
        this.setState({
          error: 'Could not post a tweet.',
        })
      })
  }

  getAllTweets() {
    fetch('/api/tweets')
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({ 
          tweets: data.tweets,
        })
      })
  }

  render () {
    const { msg, error } = this.state;

    return (
      <form onSubmit={this.postTweet}>
        <div className="mb-3">

        {/* Textarea note: The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted). */}
          <textarea className="form-control" id="tweet" rows="3" placeholder="What's happening?" name="msg" value={msg} onChange={this.handleChange}></textarea>
        </div>

        <div className="form-group row g-0">
          <div className="col d-inline-flex">
            <input className="form-control" type="file" id="image" />
          </div>
          <div className="col d-flex justify-content-end">
            <button type="submit" className="btn btn-tweet"><b>Tweet</b></button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </div>

        {/* <div className="form-group row">
          <div className="col upload-btn-wrapper">
            <button className="btn-upload" id="customFileInput"><FontAwesomeIcon icon={faImage} className="icon-upload"/>Upload a file</button>
            <input type="file" className="custom-file-input" id="customFileInput" name="myfile" />
          </div>
          <div className="col d-flex justify-content-end">
            <button type="submit" className="btn btn-tweet"><b>Tweet</b></button>
          </div>
        </div> */}

      </form>
    )
    
  }
}

export default TweetForm;