// tweets.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './home.scss';

class Tweets extends React.Component {

  sampleTweets = [
    {
      id: 1,
      name: 'BBC News (World)',
      username: 'BBCWorld',
      message: "How to think about Covid data right now",
      created_at: "2022-01-09T17:55:46.732Z",
      updated_at: "2022-01-09T17:55:46.732Z"
    },
    {
      id: 2,
      name: 'Ricky Gervais',
      username: 'rickygervais',
      message: "💸 The jobs that will pay the highest salaries in 2040. Most of the professions we do today will be obsolete in two decades, so how can you guide your children to a successful career? ⬇️",
      created_at: "2022-01-09T17:55:46.732Z",
      updated_at: "2022-01-09T17:55:46.732Z"
    }
  ]
  
  render () {
    return (
      <div className="tweets py-3">
        {this.sampleTweets.map(tweet => {
          return (
            <div  key={tweet.id} className="row d-flex py-2 tweet-inner">
              <div className="col-1">
                <span className="fa-layers fa-fw fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="circle-grey"/>
                  <FontAwesomeIcon icon={faUser} transform="shrink-4"/>
                </span>
              </div>

              <div className="col-11 ">
                <div className="row d-flex flex-column tweet-details">
                  <div className="col d-flex justify-content-between">
                    <div>
                      <span className="tweet-name"><b>{tweet.name}</b></span>
                      <span className="tweet-username">@{tweet.username}</span>
                      <span className="tweet-time">• 9h</span>
                    </div>
                    <button type="button" className="btn btn-link btn-delete">Delete</button>
                  </div>

                  <div className="col py-1">
                    <span>{tweet.message}</span>
                  </div>
                </div>
                

              </div>
            </div>
          )
        })}
      </div>
    )
    
  }
}

export default Tweets;