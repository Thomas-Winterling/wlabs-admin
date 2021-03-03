import React from "react"
import '../css/style.min.css'
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import TerminPlaner from "./pages/TerminPlaner"
import Calendar from "./pages/Calendar"
import Chat from './pages/Chat'
import Accounts from './pages/Accounts'
import Emails from './pages/Emails'
import Projects from './pages/Projects'

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/terminplaner" component={TerminPlaner} />
            <PrivateRoute path="/chat" component={Chat} />
            <PrivateRoute path="/calendar" component={Calendar} />
            <PrivateRoute path="/accounts" component={Accounts} />
            <PrivateRoute path="/emails" component={Emails} />
            <PrivateRoute path="/projects" component={Projects} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
