// user.jsx
import React from 'react';
import LeftBanner from '@src/leftBanner';
import RightBanner from '@src/rightBanner';

import './home.scss';

class User extends React.Component {

  render () {
    return (
      <div className="container">
        <div className="row g-0 h-100">
          <div className="col-3 d-flex justify-content-end">
            <LeftBanner />
          </div>
          <div className="col-6">
            <h4>Home</h4>
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