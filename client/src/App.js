import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import EventsListContainer from './components/EventsListContainer';
import EventsDetailTicketList from './components/EventDetail';
import TicketDetail from './components/TicketDetail';
import LoginFormContainer from './components/EventsListContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home}/>
          {/* route to login page to be added */}
          <Route path="/events" component={EventsListContainer}/>
          <Route path="/events/:id" exact component={EventsDetailTicketList}/>
          <Route path="/events/tickets/:id" exact component={TicketDetail}/>
          <Route path="/login" component={LoginFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
