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
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  postTweet = (e) => {
    e.preventDefault();

    // Why FormData? - The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values
    let formData = new FormData()

    // The append() method of the FormData interface appends a new value onto an existing key inside a FormData object, or adds the key if it does not already exist. Synatx: formData.append(name, value);
    formData.append('tweet[message]', this.state.msg);

    fetch('/api/tweets', safeCredentials({
      method: 'POST',
      data: formData,
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          console.log(`This worked`)
          // clear tweet form, then get tweets

        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not post a tweet.',
        })
      })
  }

  render () {
    const { msg, error } = this.state;

    return (
      <form onSubmit={this.postTweet}>
        <div className="mb-3">
          <textarea className="form-control" rows="3" placeholder="What's happening?" value={msg} onChange={this.handleChange}></textarea>
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