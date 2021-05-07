import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";

import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
