import React from 'react';
import Item from './Item';

function List() {
  return (
    <ul className="nav__list row">
      <Item linkName="Home" link="/supply-checklist/" />
      <Item linkName="Equipments" link="/equipments" key="equipments" />
    
    </ul>
  );
}

export default List;
