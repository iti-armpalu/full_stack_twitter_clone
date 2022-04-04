import React from 'react'
import ReactDOM from 'react-dom'
import LeftBanner from '@src/leftBanner';
import RightBanner from '@src/rightBanner';
import Tweets from '@src/tweets';
import { handleErrors } from '@utils/fetchHelper';

import './profile.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: true,
      username: '',
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
          username: data.username,
        })
      })
  }

  getUserTweets(username) {
    console.log("Get user tweets")
  }



  render () {
    const { authenticated, username } = this.state;

    if (authenticated) {
      console.log({authenticated})
      console.log({username})
      return (
        <div className="container">
        <div className="row g-0 h-100">
          <div className="col-3 d-flex justify-content-end">
            <LeftBanner user_id={this.props.user_id} username={username} email={this.props.email} />
          </div>
          <div className="col-6 feed-inner">
            <div className="row d-flex flex-column px-3 py-2">
              <div className="col py-3">
                <h5 className="mb-0"><b>abc</b></h5>
              </div>
              <div className="col">
                <Tweets user_id={this.props.user_id} />
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

    return (
      <Guest />
    )

      
    }
}

document.addEventListener('DOMContentLoaded', () => {
  // const node = document.getElementById('params');
  // const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    // <Profile user_id={data.user_id} username={data.username} email={data.email} />,
    <Profile />,
    document.body.appendChild(document.createElement('div')),
  )
})