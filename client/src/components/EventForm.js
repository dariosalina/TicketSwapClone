import React from "react";

export default function EventForm(props) {
  return (
    <article class="pa4 black-80">
      <form
        action="sign-up_submit"
        method="get"
        accept-charset="utf-8"
        onSubmit={props.onSubmit}
      >
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <div class="mt3">
            <label class="db fw4 lh-copy f6">Name:</label>
            <input
              class="pa2 input-reset ba bg-transparent w-100 measure"
              type="text"
              name="name"
              onChange={props.onChange}
              value={props.values.name}
            />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6">Picture:</label>
            <input
              class="pa2 input-reset ba bg-transparent w-100 measure"
              type="text"
              name="picture"
              onChange={props.onChange}
              value={props.values.picture}
            />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6">Description:</label>
            <input
              class="pa2 input-reset ba bg-transparent w-100 measure"
              type="text"
              name="description"
              onChange={props.onChange}
              value={props.values.description}
            />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6">Start date:</label>
            <input
              class="pa2 input-reset ba bg-transparent w-100 measure"
              type="text"
              name="start_date"
              onChange={props.onChange}
              value={props.values.start_date}
            />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6">End date:</label>
            <input
              class="pa2 input-reset ba bg-transparent w-100 measure"
              type="text"
              name="end_date"
              onChange={props.onChange}
              value={props.values.end_date}
            />
          </div>

          <button
            class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
            type="submit"
            className="btn"
          >
            Save
          </button>
        </fieldset>
      </form>
    </article>
  );
}
