// mainFeed.jsx
import React from 'react';
import TweetForm from '@src/userComponents/tweetForm';
import Tweets from '@src/userComponents/tweets';

class MainFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
    }
  }

  render () {
    const { username } = this.state

    return (
      <div className="row d-flex flex-column px-3 py-2">
        <div className="col py-3">
          <h5 className="mb-0"><b>Home</b></h5>
        </div>
        <div className="col">
          <TweetForm />
        </div>
        <div className="col">
          <Tweets username={username} />
        </div>
      </div>
    )
  }
}

export default MainFeed;