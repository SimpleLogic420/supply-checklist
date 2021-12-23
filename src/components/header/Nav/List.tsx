import React from 'react';
import Item from './Item';

function List() {
  return (
    <ul className="nav__list row">
      <Item linkName="Home" link="/" />
      <Item linkName="About" link="/about" key="about" />
      <Item linkName="Login" link="/login" key="login" />
      <Item linkName="Sign Up" link="/sign-up" key="sign-up" />
    </ul>
  );
}

export default List;