// tweets.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import FormatDate from '@utils/formatDate';
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

  userPage = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    let tweetEl = e.target.closest(".tweet-username")
    let userTweetPage = tweetEl.textContent.slice(1)
    const redirect_url = params.get(`redirect_url`) || `/${userTweetPage}`;
    window.location = redirect_url;
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
                      <span className="tweet-name"><b>{tweet.username}</b></span>
                      <button type="button" className="btn btn-link p-0 align-top tweet-username" onClick={this.userPage}>@{tweet.username}</button>
                      <span className="tweet-time">• {FormatDate(tweet.created_at, true)}</span>
                    </div>
                    {/* Condition: if user.id == tweet.user_id then show "Delete" button */}
                    {(tweet.user_id == this.props.user_id)
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