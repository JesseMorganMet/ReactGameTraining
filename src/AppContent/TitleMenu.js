import React, { useState } from 'react';
import '../style.scss';

export default function TitleMenu({ toggle, changeTitle, title }) {
  return (
    <>
      <section className="titleMenu">
        <div id="top">
          <h3 id="toggle" onClick={toggle}>
            X
          </h3>
          <h1>Please enter a name</h1>
        </div>
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
