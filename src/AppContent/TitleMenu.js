import React, { useState } from 'react';

export default function TitleMenu({ toggle, changeTitle, title }) {
  return (
    <>
      <section className="titleMenu">
        <h3 id="toggle" onClick={toggle}>
          X
        </h3>
        <h1>Please enter a name</h1>
        <input
          type="text"
          id="titleChange"
          name="titleChange"
          value={title}
          onChange={(event) => changeTitle(event.target.value)}
        />
      </section>
    </>
  );
}
