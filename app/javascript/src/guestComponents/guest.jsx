// guest.jsx
import React from 'react';
import SignupWidget from '@src/guestComponents/signupWidget';
import SigninWidget from '@src/guestComponents/signinWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../home.scss';

class Guest extends React.Component {

  // --- Guest page (user is not signed in). Sign up and sign in widgets will be displayed here ---
  render () {

    return(
      <div>
        <div className="row g-0 content">
          <div className="col image">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter-large-icon" />
          </div>
          <div className="col">
            <div className="py-5 px-3">
              <div className="row g-0">
                <div className="col-12">
                  <div className="p-3">
                    <FontAwesomeIcon icon={faTwitter} size="3x" className="twitter-small-icon" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3">
                    <h1 className="landing-header my-4">Happening now</h1>
                  </div>
                </div>
                <div className="col-12">
                  <div className="p-3">
                    <div className="row">
                      <div className="col-6"> 
                        <SigninWidget />
                      </div>
                      <div className="col-6">
                        <SignupWidget />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <nav className="footer-bar px-3 py-2 d-flex flex-wrap justify-content-center">
            <a href="#"><span>About</span></a>
            <a href="#"><span>Help Center</span></a>
            <a href="#"><span>Terms of Service</span></a>
            <a href="#"><span>Privacy Policy</span></a>
            <a href="#"><span>Cookie Policy</span></a>
            <a href="#"><span>Accessibility</span></a>
            <a href="#"><span>Ads info</span></a>
            <a href="#"><span>Blog</span></a>
            <a href="#"><span>Status</span></a>
            <a href="#"><span>Careers</span></a>
            <a href="#"><span>Brand Resources</span></a>
            <a href="#"><span >Advertising</span></a>
            <a href="#"><span>Marketing</span></a>
            <a href="#"><span >Twitter for Business</span></a>
            <a href="#"><span>Developers</span></a>
            <a href="#"><span >Directory</span></a>
            <a href="#"><span>Settings</span></a>
            <a href="#"><span>© 2022 Twitter, Inc.</span></a>
          </nav>
        </footer>
      </div>
    )
  }
}

export default Guest;