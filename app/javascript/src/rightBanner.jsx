// rightBanner.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './home.scss';

class LeftBanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearchResults: false
    }
  }

  showSearchResultsFunc = () => {
    const inputEl = document.querySelector('.rightBanner .input-group')
    if (!this.state.showSearchResults) {
      inputEl.classList.add('focus')
    } else {
      inputEl.classList.remove('focus')
    }
    this.setState({ showSearchResults: !this.state.showSearchResults })
  }

  whatsHappeningTweets = [
    {
      id: 1,
      topic: "Programming",
      hashtag: "RubyOnRails",
      numberOfTweets: "13.6K",
    },
    {
      id: 2,
      topic: "Programming",
      hashtag: "FullStackDevelopment",
      numberOfTweets: "150K",
    },
    {
      id: 3,
      topic: "Programming",
      hashtag: "WebDevelopment",
      numberOfTweets: "5K",
    },
    {
      id: 4,
      topic: "React",
      hashtag: "ReactJS",
      numberOfTweets: "80K",
    },
  ]

  relevantPeople = [
    {
      id: 1,
      name: 'BBC News (World)',
      username: 'BBCWorld'
    },
    {
      id: 2,
      name: 'Ricky Gervais',
      username: 'rickygervais'
    }
  ]

  render () {
    return (
        <div className="d-flex flex-column rightBanner px-2 py-2">
          <div className="mb-3">
            <div className="input-group search-bar-background">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faSearch} className="search-bar-icon"/>
              </span>
              <input type="text" className="form-control" placeholder="Search Twitter" aria-label="Search Twitter" aria-describedby="basic-addon1" onFocus={this.showSearchResultsFunc} onBlur={this.showSearchResultsFunc} />
              </div>
              {this.state.showSearchResults 
                ? (<div id="searchResults"><p className="search-bar-help">Try searching for people, topics, or keywords</p></div>)
                : (<div></div>)
              }
          </div>

          <div className="right-sidebar-box">
            <div className="px-3 py-2">
              <h2><b>What's happening</b></h2>
            </div>
            <div>
              {this.whatsHappeningTweets.map(tweet => {
                return (
                  <div key={tweet.id} className="row g-0 d-flex flex-column px-2 py-3 whats-happening-tweet">
                    <div className="col">
                      <span>{tweet.topic}</span>
                      <span> • Trending</span>
                    </div>
                    <div className="col">
                      <h6 className="my-0"><b>#{tweet.hashtag}</b></h6>
                    </div>
                    <div className="col">
                      <span>{tweet.numberOfTweets} Tweets</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="right-sidebar-box">
            <div className="px-3 py-2">
              <h2><b>Who to follow</b></h2>
            </div>
            <div>
              {this.relevantPeople.map(user => {
                return (
                  <div key={user.id} className="row g-0 d-flex align-items-center px-2 py-3">
                    <div className="col-2">
                      <span className="fa-layers fa-fw fa-2x">
                      <FontAwesomeIcon icon={faCircle} className="circle-grey"/>
                      <FontAwesomeIcon icon={faUser} transform="shrink-4"/>
                      </span>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center ">
                      <h6 className="my-0"><b>{user.name}</b></h6>
                      <h6 className="my-0">@{user.username}</h6>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                      <button type="button" class="btn btn-dark btn-follow">Follow</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>


        </div>

    )
    
  }
}

export default LeftBanner;