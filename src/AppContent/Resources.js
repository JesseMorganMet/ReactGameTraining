import React, {useState} from 'react';

export default function Resources({ click, incrementBigClick }){
  let [bigClickCost, setBigClickCost] = useState(100);
  let bigClickAmount = 1;

  function buyBigClick(){
    if(click >= bigClickCost){
      incrementBigClick(bigClickAmount);
    }
  }

  return (
    <>
      <div className="card">
        <h2>Resources:</h2>
        <div className="info">
          <p>Big Clicks : </p>
          <p id="purchase" onClick={buyBigClick}>Purchase ({bigClickCost}c)</p>
        </div>
        <p id="desc">Like clicks just bigger</p>
      </div>
    </>
  );
}