// tweetForm.jsx
import React from 'react';
import { safeCredentialsFormData, handleErrors } from '@utils/fetchHelper';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faImage } from '@fortawesome/free-solid-svg-icons';

class TweetForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
      selectedFile: null,
      error: '',
      tweets: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // On file select (from the pop up)
  onFileChange = (e) => {
      
    // Update the state
    this.setState({ 
      [e.target.name]: e.target.files[0],
    });
  };

  postTweet = (e) => {
    e.preventDefault();

    // Create an object of formData
    let formData = new FormData();
    formData.append('tweet[message]', this.state.msg);
    if (this.state.selectedFile !== null) {
      formData.append('tweet[image]', this.state.selectedFile, this.state.selectedFile.name);
    }
 
    console.log(this.state.msg);
    console.log(this.state.selectedFile.name);

    fetch('/api/tweets', safeCredentialsFormData({
      method: 'POST',
      body: formData,
    }))
      .then(handleErrors)
      .then(data => {
        const tweetForm = document.querySelector('textarea#tweet')
        tweetForm.value = ''
        const tweetFormFile = document.querySelector('input#file-select')
        tweetFormFile.value = ''
        console.log('data', data)
        this.setState({ 
          msg: '',
          selectedFile: null
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
    const { msg, selectedFile, error } = this.state;

    return (
      <form onSubmit={this.postTweet}>
        <div className="mb-3">

        {/* Textarea note: The name attribute is needed to reference the form data after the form is submitted (if you omit the name attribute, no data from the text area will be submitted). */}
          <textarea className="form-control" id="tweet" rows="3" placeholder="What's happening?" name="msg" value={msg} onChange={this.handleChange}></textarea>
        </div>

        <div className="form-group row g-0">
          <div className="col d-inline-flex">
            <input className="form-control" type="file" id="file-select" name="selectedFile" onChange={this.onFileChange} />
          </div>
          <div className="col d-flex justify-content-end">
            <button type="submit" className="btn btn-tweet"><b>Tweet</b></button>
            {error && <p className="text-danger mt-2">{error}</p>}
          </div>
        </div>
      </form>
    )
  }
}

export default TweetForm;