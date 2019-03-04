import React from "react";

import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <nav class="tc pb3 center">
      <div class="link dim gray b f6 f5-ns dib mr3" href="#" title="Home">
        <Link to={`/signup`}>SignUp</Link>
      </div>
      <div class="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">
        {" "}
        <Link to={`/login`}>Login</Link>
      </div>
      <div class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">
        <Link to={`/events`}>Events</Link>
      </div>
      <div class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">
        <Link to={`/logout`}>LogOut</Link>
      </div>
    </nav>
  );
}
