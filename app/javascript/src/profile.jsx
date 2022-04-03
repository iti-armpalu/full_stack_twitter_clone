import React from 'react'
import ReactDOM from 'react-dom'
import LeftBanner from '@src/leftBanner';
import RightBanner from '@src/rightBanner';
import UserTweets from '@src/userTweets';
import { handleErrors } from '@utils/fetchHelper';

import './profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: true,
      username: 'abc',
      userTweets: [],
    }
  }

  componentDidMount() {
    this.userAuthenticated(),
    this.getUserTweets()
  }

  userAuthenticated() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }

  getUserTweets(username) {
    console.log("Get user tweets")
    fetch(`/users/${username}/tweets`)
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        this.setState({ 
          tweets: data.userTweets,
        })
      })
  }



  render () {
    const { authenticated, username } = this.state;

    if (authenticated) {
      return (
        <div className="container">
        <div className="row g-0 h-100">
          <div className="col-3 d-flex justify-content-end">
            <LeftBanner />
          </div>
          <div className="col-6 feed-inner">
            <div className="row d-flex flex-column px-3 py-2">
              <div className="col py-3">
                <h5 className="mb-0"><b>{username}</b></h5>
              </div>
              <div className="col">
                <UserTweets />
              </div>
            </div>
          </div>
          <div className="col-3">
            <RightBanner />
          </div>

        </div>
      </div>
      );
    };

      
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Profile />,
    document.body.appendChild(document.createElement('div')),
  )
})