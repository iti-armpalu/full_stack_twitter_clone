// tweets.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import FormatDate from '@utils/formatDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
    }
  }

  componentDidMount() {
  }

  deleteTweet = (e) => {
    e.preventDefault();
    let tweetEl = e.target.closest(".tweet-inner")
    let tweetId = tweetEl.getAttribute('id')

    fetch(`/api/tweets/${tweetId}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        // console.log('data', data)
        if (data.success) {
          // this.getAllTweets()
          this.props.getAllTweets()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete tweet.',
        })
      })
  }

  render () {
    const { tweets } = this.props
    const { username } = this.state

    return (
      <div className="tweets pt-3">
        {tweets.map(tweet => {
          return (
            <div  key={tweet.id} id={tweet.id} className="row d-flex py-2 tweet-inner">
              <div className="col-1">
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="circle-grey"/>
                  <FontAwesomeIcon icon={faUser} transform="shrink-4"/>
                </span>
              </div>
              <div className="col-11 ">
                <div className="row d-flex flex-column tweet-details">
                  <div className="col d-flex justify-content-between">
                    <div>
                      <span className="tweet-name"><b>{tweet.username}</b></span>
                      <a href={`/${tweet.username}`} className="p-0 tweet-username">@{tweet.username}</a>
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

                    {/* Condition: if tweet.image !== null then show the attached image. */}
                    {(tweet.image !== null) 
                      ? <div className="tweet-image mt-2">
                          <img src={tweet.image} alt="Image" />
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