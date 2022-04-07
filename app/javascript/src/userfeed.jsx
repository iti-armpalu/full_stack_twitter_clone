import React from 'react';
import ReactDOM from 'react-dom';
import LeftBanner from '@src/userComponents/leftBanner';
import RightBanner from '@src/userComponents/rightBanner';
import UserTweets from '@src/userComponents/userTweets';
import Guest from '@src/guestComponents/guest';
import { handleErrors } from '@utils/fetchHelper';

// Importing FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './userfeed.scss';

class Userfeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    //   username: this.props.username,
    //   currentUsername: '',
    //   currentEmail: '',
      authenticated: true,
    }
  }

  componentDidMount() {
    this.userAuthenticated()
  }

  userAuthenticated() {
    fetch('/api/authenticated')
    .then(handleErrors)
    .then(data => {
      console.log('data', data)
      this.setState({
        authenticated: data.authenticated,
        username: data.username,
        email: data.email,
      })
    })
  }

  render () {
    const { authenticated, username, email } = this.state

    if (authenticated) {
      console.log("authenticated: " + authenticated)
      console.log("username: " + username)
      return (
        <div className="container">
          <div className="row g-0 h-100">
            <div className="col-3 d-flex justify-content-end ">
              <LeftBanner username={username} email={email} />
            </div>
            <div className="col-6 feed-inner">
              <div className="row d-flex flex-column px-3 py-2">
                <div className="col py-3">
                  <div className="row d-flex">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <a href="/">
                        <span>
                          
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </span>
                      </a>
                    </div>
                    <div className="col-11">
                      <h5 className="mb-0"><b>{this.props.username}</b></h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <UserTweets username={this.props.username} currentUsername={username} />
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
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <Userfeed username={data.username} />,
    document.body.appendChild(document.createElement('div')),
  )
})