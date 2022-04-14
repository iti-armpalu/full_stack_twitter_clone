// signupWidget.jsx
import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SigninWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      authenticated: false,
      success: '',
      error: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

    // --- If user click on "Sign in" button, a new session is created. If successful user is redirected to the "Home" page, where he passes "authenticated" condition, as is taken to "User" page ---
  signin = (e) => {
    e.preventDefault();

    fetch('/api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        console.log('data', data)
        if (data.success) {
          this.setState({
            username: '',
            password: '',
            authenticated: true,
            success: 'Sign in was successful.',
          })
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not sign in.',
        })
      })
  }

  render () {
    const { username, password, success, error } = this.state;

    return (
      <div className="p-3 log-in-sign-up-background rounded">
      <h6 className="my-3"><b>Sign in to Twitter</b></h6>
      <Form onSubmit={this.signin}>
        <Form.Group className="mb-3">
        <Form.Control type="username" placeholder="Username" name="username" value={username} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group className="mb-4">
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit" variant="primary" size="sm" className="log-in-button">
          Sign in
          </Button>
          <Button variant="light" size="sm">
            Forgot password?
          </Button>
          {success && <p className="text-success mt-2">{success}</p>}
          {error && <p className="text-danger mt-2">{error}</p>}
        </div>
      </Form>
    </div>
    )
  }
}
export default SigninWidget;