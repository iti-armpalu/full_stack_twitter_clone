// userTweets.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import FormatDate from '@utils/formatDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

class UserTweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userTweets: [],
    }
  }

  componentDidMount() {
    this.getAllUserTweets()
  }

  getAllUserTweets() {
    const username = this.props.username;
    console.log(username);

    fetch(`/api/users/${username}/tweets`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data),
        this.setState({
          userTweets: data.tweets,
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
          this.getAllUserTweets()
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not delete tweet.',
        })
      })
  }

  render () {
    const { userTweets } = this.state;

    return (
      <div className="tweets py-3">
        {userTweets.map(tweet => {
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
                      <a href={`/${tweet.username}`} className="p-0 align-top tweet-username">@{tweet.username}</a>
                      <span className="tweet-time">• {FormatDate(tweet.created_at, true)}</span>
                    </div>

                    {/* Condition: if username == tweet.username then show "Delete" button */}
                    {(tweet.username == this.props.currentUsername)
                      ? <button type="button" className="btn btn-link btn-delete" onClick={this.deleteTweet}>Delete</button>
                      : <div></div>
                    }
                    
                  </div>
                  <div className="col py-1">
                    <span>{tweet.message}</span>

                     {/* Condition: if tweet.image !== null then show the attached image. Currently showing random image for testing purposes. Console.log image data show null at the moment */}
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

export default UserTweets;