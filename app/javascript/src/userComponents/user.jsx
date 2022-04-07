// user.jsx
import React from 'react';
import LeftBanner from '@src/userComponents/leftBanner';
import RightBanner from '@src/userComponents/rightBanner';
import Mainfeed from '@src/userComponents/mainfeed';

import '../home.scss';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.username,
      email: this.props.email,
    }
  }

  render () {
    const { username, email } = this.state

    return (
      <div className="container">
        <div className="row g-0 h-100">
          <div className="col-3 d-flex justify-content-end">
            <LeftBanner username={username} email={email} />
          </div>
          <div className="col-6 feed-inner">
            <Mainfeed username={username}/> 
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