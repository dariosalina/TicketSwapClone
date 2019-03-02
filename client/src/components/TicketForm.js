import React from "react";

export default function TicketForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Picture:
        <input
          type="text"
          name="picture"
          onChange={props.onChange}
          value={props.values.picture}
        />
      </label>

      <label>
        Description:
        <input
          type="text"
          name="description"
          onChange={props.onChange}
          value={props.values.description}
        />
      </label>

      <label>
        Price:
        <input
          type="number"
          name="price"
          onChange={props.onChange}
          value={props.values.price}
        />
      </label>

      {/* event must be linked taking id parameter of the page */}
      {/* <label>
        Event:
        <input
          type="text"
          name="end_date"
          onChange={props.onChange}
          value={props.values.event_id}
        />
      </label> */}

      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
}
