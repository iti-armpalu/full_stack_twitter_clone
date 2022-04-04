// userFeed.jsx
import React from 'react';
import Tweets from '@src/userComponents/tweets';
import { handleErrors } from '@utils/fetchHelper';

class UserFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userTweets: [],
      tweetUsername: '',
    }
  }

  componentDidMount() {
    fetch(`/api/tweets/${tweet_id}`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data),
        console.log(tweetUsername),
        this.setState({
          userTweets: data.tweets,
          tweetUsername: data.username,
        })
      })
  }

  getUserTweets(username) {
    console.log("Get user tweets")
  }

  render () {
    const { username } = this.state
    
    return (
      <div className="row d-flex flex-column px-3 py-2">
        <div className="col py-3">
          <h5 className="mb-0"><b>{username}</b></h5>
        </div>
        <div className="col">
          <Tweets username={username} />
        </div>
      </div>
    )
  }
}

export default UserFeed;