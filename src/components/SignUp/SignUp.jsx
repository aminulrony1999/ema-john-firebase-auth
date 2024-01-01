import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const SignUp = () => {
  const {createNewUser} = useContext(AuthContext);
  const [error,setError] = useState('');
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmpassword.value;
        setError('');
        if(password != confirm)
        {
          setError("Your password didn't match");
          return;
        }
        else if(password.length < 6)
        {
          setError("Your password is less than 6 character");
          return;
        }
        createNewUser(email,password)
        .then((result)=>{
          console.log(result);
          console.log('New user is created');
        })
        .catch(error =>{
          setError(error.message);
        })
        form.reset();
    }
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="password" name="confirmpassword" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        <small>
          Already have an account?<Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
