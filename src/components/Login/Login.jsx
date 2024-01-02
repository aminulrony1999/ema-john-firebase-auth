import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const [error,setError] = useState(null);
  const {signIn} = useContext(AuthContext);
  const handleSignIn = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    signIn(email,password)
    .then(user => {
      console.log('User Sign In successfull');
      form.reset();
    })
    .catch(error =>{
      setError(error.message);
    })
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p><small>New to Ema John?<Link to="/signup">Create a new account</Link></small></p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default Login;
