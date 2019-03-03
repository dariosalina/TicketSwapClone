import React from "react";

import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    // <Link to={`/signup`}>SignUp</Link>
    // <Link to={`/login`}>Login</Link>
    // <Link to={`/events`}>Events</Link>
    // <Link to={`/logout`}> LogOut</Link>
    <nav class="tc pb3 center">
      <a class="link dim gray b f6 f5-ns dib mr3" href="#" title="Home">
        <Link to={`/signup`}>SignUp</Link>
      </a>
      <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">
        {" "}
        <Link to={`/login`}>Login</Link>
      </a>
      <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="About">
        <Link to={`/events`}>Events</Link>
      </a>
      <a class="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">
        <Link to={`/logout`}> LogOut</Link>
      </a>
    </nav>
  );
}
