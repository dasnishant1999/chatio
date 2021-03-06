import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { useAuth } from "../../contexts/AuthProvider";

import "./Styles.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const history = useHistory();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      seterror("");
      setloading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setloading(false);
      history.push("/");
    } catch (error) {
      console.log(error);
      seterror(error.code.split("/")[1]);
      setloading(false);
    }
  }

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <p>user1:test1@gmail.com and pass:123456</p>
        <p>user2:test2@gmail.com and pass:123456</p>
        {error && <div className="error">{error}</div>}
        <p className="details">Email</p>
        <input type="text" ref={emailRef} />
        <p className="details">Password</p>
        <input type="password" ref={passwordRef} />
        {loading ? (
          <Loader active size="mini" />
        ) : (
          <button disabled={loading}>Login</button>
        )}
        <p id="login-redirect">
          Dont' have an account?<Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
