import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <nav
    className="navbar is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <div className="navbar-item">
        <Link to="/">
          <h1 className="title has-text-white">React Roulet</h1>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
