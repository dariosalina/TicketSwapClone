import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import EventsListContainer from "./components/EventsListContainer";
import EventsDetailTicketList from "./components/EventDetail";
import TicketDetail from "./components/TicketDetail";
import LoginFormContainer from "./components/login/LoginPage";
import CreateEventFormContainer from "./components/EventFormContainer";
import CreateTicketFormContainer from "./components/TicketFormContainer";
import SignupPage from "./components/signup/SignUpPage";
// import LogoutPage from './components/logout/LogoutPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
          {/* route to login page to be added */}
          <Route exact path="/signup" component={SignupPage} />
          {/* <Route exact path="/logout" component={LogoutPage} /> */}
          <Route path="/events" exact component={EventsListContainer} />
          <Route path="/events/:id" exact component={EventsDetailTicketList} />
          <Route path="/events/tickets/:id" exact component={TicketDetail} />
          <Route path="/login" exact component={LoginFormContainer} />
          <Route
            path="/createevents"
            exact
            component={CreateEventFormContainer}
          />
          <Route
            path="/createtickets"
            exact
            component={CreateTicketFormContainer}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
