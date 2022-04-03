// user.jsx
import React from 'react';
import LeftBanner from '@src/leftBanner';
import RightBanner from '@src/rightBanner';
import TweetForm from '@src/tweetForm';
import Tweets from '@src/tweets';

import './home.scss';

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="container">
        <div className="row g-0 h-100">
          <div className="col-3 d-flex justify-content-end">
            <LeftBanner user_id={this.props.user_id} username={this.props.username} email={this.props.email} />
          </div>
          <div className="col-6 feed-inner">
            <div className="row d-flex flex-column px-3 py-2">
              <div className="col py-3">
                <h5 className="mb-0"><b>Home</b></h5>
              </div>
              <div className="col">
                <TweetForm />
              </div>
              <div className="col">
                <Tweets />
              </div>
            </div>
          </div>
          <div className="col-3">
            <RightBanner />
          </div>

        </div>
      </div>
    )
  }
}

export default User;