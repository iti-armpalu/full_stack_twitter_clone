import React from 'react'
import ReactDOM from 'react-dom'
import Guest from '@src/guest';
import User from '@src/user';
import { handleErrors } from '@utils/fetchHelper';

import './home.scss';

class Home extends React.Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }

  render () {
    const { authenticated } = this.state;

    if (authenticated) {
      return (
        <User />
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