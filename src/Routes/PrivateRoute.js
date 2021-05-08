import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import ChatProvider from "../contexts/ChatProvider";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <ChatProvider>
            <Component {...props} />
          </ChatProvider>
        ) : (
          <Redirect to="/signin"></Redirect>
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
