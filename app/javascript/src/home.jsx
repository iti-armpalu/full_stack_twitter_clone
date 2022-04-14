import React from 'react'
import ReactDOM from 'react-dom'
import Guest from '@src/guestComponents/guest';
import User from '@src/userComponents/user';
import { handleErrors } from '@utils/fetchHelper';

import './home.scss';

class Home extends React.Component {
  state = {
    authenticated: false,
    username: '',
    email: '',
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        // console.log(data)
        this.setState({
          authenticated: data.authenticated,
          username: data.username,
          email: data.email,
        })
      })
  }

  render () {
    const { authenticated, username, email } = this.state;

    if (authenticated) {
      return (
        <User user_id={this.props.user_id} username={username} email={email} />
      );
    };

      return (
        <Guest />
      )
    }
}

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})