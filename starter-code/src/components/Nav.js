import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () =>{
  <nav class="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/CountryDetail">CountryDetail</Link>
        </div>
      </nav>
}
export default Nav; 