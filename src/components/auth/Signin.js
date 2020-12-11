import React, { Component } from 'react';
import './Signin.scss';
import InputField from '../fields/InpuField';
import Button from '../Button';
import { signInWithGoogle } from '../../config/firebase';

class Signin extends Component {
  state = { email: '', password: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <InputField
            onChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            required
          />
          <InputField
            onChange={this.handleChange}
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <Button type="submit">SIGN IN</Button>
            <Button onClick={signInWithGoogle} isSignedinGoogle>
              SIGN IN WITH GOOGLE
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;