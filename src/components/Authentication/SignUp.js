import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthProvider";

import "./Styles.css";

function SignUp() {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      seterror("Passwords do not match");
    } else {
      try {
        seterror("");
        setloading(true);
        const userName = userNameRef.current.value;
        const res = await signup(
          emailRef.current.value,
          passwordRef.current.value
        );

        if (res?.user?.uid) {
          fetch("/api/createUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userName: userName,
              userId: res.user.uid,
            }),
          })
            .then(() => {
              db.collection("chatUsers")
                .doc(res.user.uid)
                .set({ avatar: "", userName: userName });
            })
            .catch((err) => console.log("Something went wrong", err));
        } else {
          console.log("Something went wrong");
        }

        setloading(false);
        history.push("/");
      } catch (error) {
        console.log(error.code);
        seterror(error.code.split("/")[1]);
        setloading(false);
      }
    }
  }

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {error && <div className="error">{error}</div>}
        <p className="details">Username (cannot be changed)</p>
        <input type="text" ref={userNameRef} />
        <p className="details">Email</p>
        <input type="text" ref={emailRef} />
        <p className="details">Password</p>
        <input type="password" ref={passwordRef} />
        <p className="details">Confirm Password</p>
        <input type="password" ref={confirmPasswordRef} />
        <button disabled={loading}>
          {loading ? "loading..." : " Sign up"}
        </button>
        <p id="login-redirect">
          Already have an account?<Link to="/signin">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
