import React from "react";
import { Link } from "react-router-dom";


export default class EventsList extends React.Component{
    renderEventList(event) {
        return (
          <li key={event.id}>
            <p className="title"><Link to={`/events/${event.id}`}>
             {event.name}
             </Link></p>
             <p>{event.description}</p>
          </li>
        );
      }
    
      render() {
        const Events = this.props.events;
        
        
        return (
          <div>
            <h1>Here you can find a list of events:</h1>
            <h3> Click on the title to see the details</h3>
      {!Events && "Loading"}
      {Events && <ul>{Events.map(this.renderEventList)}</ul>}
          </div>
        );
      }

}