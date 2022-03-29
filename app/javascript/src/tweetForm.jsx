// tweetForm.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';


import './home.scss';

class TweetForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFileNameFunc: false
    }
  }

  showFileNameFunc = () => {
    document.querySelector('.custom-file-input').addEventListener('change', function (e) {
      var name = document.getElementById("customFileInput").files[0].name;
      var nextSibling = e.target.nextElementSibling
      nextSibling.innerText = name
    })

    this.setState({ showFileNameFunc: !this.state.showFileNameFunc })
  }
  
  render () {
    return (
      <form>
        <div className="mb-3">
          <textarea className="form-control" id="tweet" rows="3" placeholder="What's happening?"></textarea>
        </div>
        <div className="form-group row g-0">
          <div className="col d-inline-flex">
            <input className="form-control" type="file" id="image" />
          </div>
          <div className="col d-flex justify-content-end">
            <button type="button" className="btn btn-tweet">Tweet</button>
          </div>
        </div>

        <div className="form-group row">
          <div className="col upload-btn-wrapper">
            <button className="btn-upload" id="customFileInput"><FontAwesomeIcon icon={faImage} className="icon-upload"/>Upload a file</button>
            <input type="file" className="custom-file-input" id="customFileInput" name="myfile" />
          </div>
          <div className="col d-flex justify-content-end">
            <button type="button" className="btn btn-tweet"><b>Tweet</b></button>
          </div>
        </div>

      </form>
    )
    
  }
}

export default TweetForm;