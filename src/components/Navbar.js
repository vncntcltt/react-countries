import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Navbar;