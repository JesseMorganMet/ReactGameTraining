import React from 'react';
import '../style.scss';

export default function Stats({ count, cPS, countModifier }) {
  return (
    <>
      <div id="stats">
        <h2>Reasources</h2>
        <p>Count: {Math.round(count * 100) / 100} ({Math.round(cPS * 100) / 100} cps)</p>
        <p>Current CPS: {Math.round(cPS * 100) / 100}</p>
        <p>Multipliers: {countModifier}</p>
        <p>x</p>
        <p>x</p>
        <p>x</p>
        <p>x</p>
      </div>
    </>
  );
}
