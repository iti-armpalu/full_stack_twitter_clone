// tweets.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './home.scss';

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
    }
    
  }

  componentDidMount() {
    this.getAllTweets()
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

  deleteTweet = (e) => {
    e.preventDefault();
    let tweetEl = e.target.closest(".tweet-inner")
    let tweetId = tweetEl.getAttribute('id')
    console.log(tweetId)

    fetch(`/api/tweets/${tweetId}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        if (data.success) {
          console.log('Tweet deleted successfully')
          this.getAllTweets()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete tweet.',
        })
      })
  }


  render () {
    const { tweets } = this.state;

    return (
      <div className="tweets py-3">
        {tweets.map(tweet => {
          return (
            <div  key={tweet.id} id={tweet.id} className="row d-flex py-2 tweet-inner">
              <div className="col-1">
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="circle-grey"/>
                  <FontAwesomeIcon icon={faUser} transform="shrink-4"/>
                </span>
              </div>

              <div id="4"  className="col-11 ">
                <div id="3"  className="row d-flex flex-column tweet-details">
                  <div id="2" className="col d-flex justify-content-between">
                    <div id="1">
                      <span className="tweet-name"><b>User User</b></span>
                      <span className="tweet-username">@User</span>
                      <span className="tweet-time">• 9h</span>
                    </div>
                    {/* Here will be a condition: if user.id == tweet.user_id */}
                    {(true)
                      ? <button type="button" className="btn btn-link btn-delete" onClick={this.deleteTweet}>Delete</button>
                      : <div></div>
                    }
                    
                  </div>

                  <div className="col py-1">
                    <span>{tweet.message}</span>
                  </div>
                </div>
                

              </div>
            </div>
          )
        })}
      </div>
    )
    
  }
}

export default Tweets;