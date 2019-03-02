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
import LogoutPage from "./components/logout/LogOut";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Uber4Tickets</h1>
          <Route path="/" component={Home} />
          {/* route to login page to be added */}
          <Route path="/signup" component={SignupPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route path="/events" component={EventsListContainer} />
          <Route path="/events/:id" component={EventsDetailTicketList} />
          <Route path="/events/tickets/:id" component={TicketDetail} />
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/createevents" component={CreateEventFormContainer} />
          <Route path="/createtickets" component={CreateTicketFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
