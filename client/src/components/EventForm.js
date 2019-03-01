import React from "react";

export default function EventForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={props.onChange}
          value={props.values.name}
        />
      </label>

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
        Start date:
        <input
          type="text"
          name="start_date"
          onChange={props.onChange}
          value={props.values.start_date}
        />
      </label>

      <label>
        End date:
        <input
          type="text"
          name="end_date"
          onChange={props.onChange}
          value={props.values.end_date}
        />
      </label>

      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
}