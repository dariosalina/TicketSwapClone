import React from "react";
import EventsListContainer from "./EventsListContainer";
import EventsDetailTicketList from "./EventDetail";
import TicketDetail from "./TicketDetail";
import LoginFormContainer from "./login/LoginPage";
import CreateEventFormContainer from "./EventFormContainer";
import CreateTicketFormContainer from "./TicketFormContainer";
import { Route, Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div>
      <h1>welcome</h1>
      <Link to={`/signup`}>SignUp</Link>
      <Link to={`/login`}>Login</Link>
      <Link to={`/events`}>Events</Link>
      <Link to={`/logout`}> LogOut</Link>
      <Link to={`/tickets`}>Tickets</Link>
      {/* <Route path="/events" component={EventsListContainer} />
      <Route path="/events/:id" component={EventsDetailTicketList} />
      <Route path="/events/tickets/:id" component={TicketDetail} />
      <Route path="/" component={LoginFormContainer} />
      <Route path="/createevents" component={CreateEventFormContainer} />
      <Route path="/createtickets" component={CreateTicketFormContainer} /> */}
    </div>
  );
}
