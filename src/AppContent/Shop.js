import React from 'react';

export default function Shop({
  autoAmount,
  autoValue,
  handleCPS
}) {

  function buyAutoAdd() {
    handleCPS();
  }

  return (
    <>
      <div className="card">
        <h2>Incrementors:</h2>
        <div className="info">
          <p>Owned : {autoAmount} </p>
          <p id="purchase" onClick={buyAutoAdd}>
            Purchase ({autoValue}c)
          </p>
        </div>
        <p id="desc">Increase your CPS by 0.2c per second</p>
      </div>
    </>
  );
}
