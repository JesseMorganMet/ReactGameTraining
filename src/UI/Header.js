import React from 'react';

export default function Header({ toggle, title, statsToggle, shopToggle }) {
  return (
    <>
      <div id="header">
        <h1>{title}</h1>
        <p id="toggle" onClick={toggle}>
          Edit Name
        </p>
        <div id="menus">
          <p onClick={statsToggle}>Stats</p>
          <p onClick={shopToggle}>Shop</p>
          <p>option</p>
          <p>option</p>
          <p>option</p>
          <p>option</p>
          <p>option</p>
        </div>
      </div>
    </>
  );
}
