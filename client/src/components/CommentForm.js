import React from "react";

export default function CommentForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Add a comment:
        <input
          type="text"
          name="comment"
          id="comment"
          onChange={props.onChange}
          value={props.values.comment}
        />
      </label>

      <button type="submit" className="btn">
        Save
      </button>
    </form>
  );
}
