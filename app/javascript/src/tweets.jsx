// tweets.jsx
import React from 'react';
import { handleErrors } from '@utils/fetchHelper';
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
    fetch('/api/tweets')
      .then(handleErrors)
      .then(data => {
        this.setState({
          tweets: data.tweets,
        })
      })
  }

  // deleteTweet = (e) => {
  //   const tweet_id = this.props.tweet_id

  //   fetch('/api/tweets/${tweet_id}' ({
  //     method: 'DELETE',
  //   }))
  //     .then(handleErrors)
  //     .then(data => {
  //       console.log("Tweet deleted")
  //       this.setState({ 
  //         msg: '' 
  //       })
  //       this.getAllTweets()
  //     })
  //     .catch(error => {
  //       this.setState({
  //         error: 'Could not post a tweet.',
  //       })
  //     })
  // }


  render () {
    const { tweets } = this.state;

    return (
      <div className="tweets py-3">
        {tweets.map(tweet => {
          return (
            <div  key={tweet.id} className="row d-flex py-2 tweet-inner">
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
                      <span className="tweet-name"><b>User User</b></span>
                      <span className="tweet-username">@User</span>
                      <span className="tweet-time">• 9h</span>
                    </div>
                    <button type="button" className="btn btn-link btn-delete">Delete</button>
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