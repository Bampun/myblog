import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Header>
        <NavLink to="/">
            <h2 className='Site-branding'>BP</h2>
        </NavLink>
    </Header>
  );
};

export default Header