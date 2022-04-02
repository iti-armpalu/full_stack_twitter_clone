// leftBanner.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faBell, faEnvelope, faBookmark, faRectangleList, faUser, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './home.scss';
import User from './user';

class LeftBanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: true,
    }
  }

  componentDidMount () {
    console.log(this.props.user);
  }

  logout = (e) => {
    e.preventDefault();

    fetch('/api/sessions', safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        if (data.success) {
          console.log('Sign out successful')
          this.setState({
            authenticated: false,
          })
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not sign out.',
        })
      })
  }


  render () {

    return (
        <div className="d-flex flex-column leftBanner px-2 py-2">

          <nav className="navbar d-flex flex-column">
            <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faTwitter} className="twitter-small-icon nav-icon" /></a>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faHome} className="nav-icon" />Home</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faHashtag} className="nav-icon" />Explore</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faBell} className="nav-icon" />Notifications</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faEnvelope} className="nav-icon" />Messages</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faBookmark} className="nav-icon" />Bookmarks</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faRectangleList} className="nav-icon" />Lists</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span><FontAwesomeIcon icon={faUser} className="nav-icon" />Profile</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span>
                  <span className="fa-layers fa-fw nav-icon-layer">
                    <FontAwesomeIcon icon={faCircle} className="nav-icon" />
                    <FontAwesomeIcon icon={faEllipsis} transform="shrink-2" className="nav-icon" />
                  </span>More</span></a>
                </li>
              </ul>
          </nav>

          <div className="user-logout">
            <div className="row d-flex align-items-center my-2">
              <div className="col-3">
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon icon={faCircle}  />
                  <FontAwesomeIcon icon={faUser} transform="shrink-6"/>
                </span>
              </div>
              <div className="col">
                <h6>@username</h6>
                <h6>email</h6>
              </div>
            </div>
            <Form onSubmit={this.logout}>
              <Button type="submit" variant="primary" size="sm">
                Log out @username
              </Button>
            </Form>
          </div>
        </div>

    )
    
  }
}

export default LeftBanner;