import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth'

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black'
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/about">About</NavLink>
    { isAuthenticated() ?
      <Fragment>
        {' '}
        <NavLink activeStyle={styles.active} to="dashboard">
          Dashboard
        </NavLink>
      </Fragment>
      :
      <Fragment>
        {' '}
        <NavLink activeStyle={styles.active} to="/login">
          Login
        </NavLink>
      </Fragment>
    }
  </nav>
)

export default NavBar