import React from "react";

export default function CommentForm(props) {
  return (
    <form class="pa4 black-80" onSubmit={props.onSubmit}>
      <label class="f6 b db mb2">Add a comment:</label>
      <input
        class="pa2 input-reset ba bg-transparent w-100 measure"
        type="text"
        name="comment"
        id="comment"
        onChange={props.onChange}
        value={props.values.comment}
      />

      <button
        class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
        type="submit"
        className="btn"
      >
        Save
      </button>
    </form>
  );
}
