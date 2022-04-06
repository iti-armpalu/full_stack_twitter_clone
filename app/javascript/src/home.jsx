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

  // --- On 'Log out" button -> end the current session. User is not authenticated and is redirected to the "Guest" page ---
  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
          username: data.username,
          email: data.email,
        })
      })
  }

  // --- If User is authenticated (meaning log in was successful) then render User page, if not then render Guest page, where user can ither sign up or sign in ---
  render () {
    const { authenticated, username, email } = this.state;

    if (authenticated) {
      return (
        <User username={username} email={email} />
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