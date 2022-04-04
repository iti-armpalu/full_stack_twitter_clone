// tweets.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import FormatDate from '@utils/formatDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      username: this.props.username,
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

  userFeed = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    let tweetEl = e.target.closest(".tweet-username")
    let userFeed = tweetEl.textContent.slice(1)
    const redirect_url = params.get(`redirect_url`) || `/${userFeed}`;
    window.location = redirect_url;
    console.log(userFeed)
  }

  render () {
    const { tweets, username } = this.state;

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
                      <a href={`/${tweet.username}`} className="p-0 align-top tweet-username">@{tweet.username}</a>
                      <span className="tweet-time">• {FormatDate(tweet.created_at, true)}</span>
                    </div>
                    {/* Condition: if username == tweet.username then show "Delete" button */}
                    {(tweet.username == username)
                      ? <button type="button" className="btn btn-link btn-delete" onClick={this.deleteTweet}>Delete</button>
                      : <div></div>
                    }
                    
                  </div>

                  <div className="col py-1">
                    <span>{tweet.message}</span>
                     {/* Condition: if tweet.image !== null then show the attached image. Currently showing random image for testing purposes. Console.log image data show null at the moment */}
                    {(true) 
                      ? <div className="tweet-image mt-2">
                          <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Image" />
                      </div>
                      : <div></div>
                    }
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