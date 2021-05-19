import React, { Component } from "react";
import UserGreeting from './Greeting'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
      LoginAcc: {
        email: "",
        password: ""
      }
    };
  }
  Change = event => {
    let LoginNew = { ...this.state.LoginAcc };
    let val = event.target.value;
    LoginNew[event.target.name] = val;
    this.setState({
      LoginAcc: LoginNew
    });
  };

  Login = event => {
    let user_email = this.state.LoginAcc.email;
    let user_password = this.state.LoginAcc.password;
    if (user_email === "b0827213@gmail.com" && user_password === "b0827213") {
      this.setState({
        isLoggedin: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (this.state.isLoggedin===true) {
        return(
        <div className="container">
           <UserGreeting/>
        </div>);
    }
    return (
      <div className="container">
        <form onSubmit={this.Login}>
            <h2>Please Sign in</h2>
            <h3>→Administrator_Email: b0827213@gmail.com</h3>
            <h3>→Administrator_PassWord: b0827213</h3>
            <div class="block">
                <TextField id="outlined-basic" type="text"     name="email"label="Email Adress" variant="outlined" onChange={this.Change}/>
            </div>
            <div class="block">
                <TextField id='outlined-basic' type="password" name="password" label='PassWord' variant='outlined'onChange={this.Change}></TextField>
            </div>    
            <div class="block">    
                <Button variant="contained" color="primary" type="submit" value="Login">Sign In</Button>
            </div>
        </form>
      </div>
    );
  }
}
export default Login;