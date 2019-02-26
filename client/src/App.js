import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import EventsListContainer from './components/EventsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home}/>
          {/* route to login page to be added */}
          <Route path="/events" component={EventsListContainer}/>
          {/* <Route path="/events/id" component={}/> */}
        </div>
      </Provider>
    );
  }
}

export default App;
