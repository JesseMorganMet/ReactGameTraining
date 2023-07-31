import React from 'react';
import '../style.scss';

export default function Header({ toggle, title }) {
  return (
    <>
      <p id="header">{title}</p>
      <p id="toggle" onClick={toggle}>Edit Name</p>
    </>
  );
}
