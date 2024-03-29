import React from 'react';

export function Resources({ incrementBigClick, bigClickCost }) {
  function buyBigClick() {
    incrementBigClick();
  }

  return (
    <>
      <div className="card">
        <h2>Resources:</h2>
        <div className="info">
          <p>Big Clicks : </p>
          <p id="purchase" onClick={buyBigClick}>
            {bigClickCost}c
          </p>
        </div>
        <p id="desc">Like clicks just bigger</p>
      </div>
    </>
  );
}
