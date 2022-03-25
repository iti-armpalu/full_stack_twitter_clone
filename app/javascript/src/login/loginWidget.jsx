// loginWidget.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

class LoginWidget extends React.Component {
  state = {
    email: '',
    password: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  login = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch('/api/sessions', safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: this.state.email,
          password: this.state.password,
        }
      })
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not log in.',
        })
      })
  }
  
  render () {
    const { email, password, error } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.login}>
          <input name="email" type="text" className="form-control form-control-lg mb-3" placeholder="Email" value={email} onChange={this.handleChange} required />
          <input name="password" type="password" className="form-control form-control-lg mb-3" placeholder="Password" value={password} onChange={this.handleChange} required />
          <button type="submit" className="btn btn-danger btn-block btn-lg">Log in</button>
          {error && <p className="text-danger mt-2">{error}</p>}
        </form>
        
        <div className="p-3 log-in-sign-up-background rounded">
          <h6 className="my-3"><b>Sign in to Twitter</b></h6>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" size="sm" className="log-in-button">
              Log in
              </Button>
              <Button variant="light" size="sm">
                Forgot password?
              </Button>
            </div>
          </Form>
        </div>
      </React.Fragment>
    )
  }
}
export default LoginWidget