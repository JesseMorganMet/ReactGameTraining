import React from 'react';
import "../UIStyles.scss";

export function Stats({
  click,
  cPS,
  clickModifier,
  bigClick,
  clickBoost,
}) {
  return (
    <>
      <div id="stats">
        <div>
          <h2>Resources</h2>
          <p>Clicks : {Math.round(click * 100) / 100}c ({Math.round(cPS * 100) / 100} cps)</p>
          <p>Big Clicks : {bigClick}bc</p>
        </div>
        <div>
          <h2>Incrementors</h2>
          <p>Current CPS: {Math.round(cPS * 100) / 100}</p>
        </div>
        <div>
          <h2>Upgrades</h2>
          <p>Click Boost: {clickBoost}</p>
          <p>Multipliers: {clickModifier}</p>
        </div>
        <p>x</p>
        <p>x</p>
        <p>x</p>
        <p>x</p>
      </div>
    </>
  );
}
