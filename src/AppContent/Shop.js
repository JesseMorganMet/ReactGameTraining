import React, { useState, useRef, useEffect } from 'react';

export default function Shop({ handleIncrementation, click, handleCPS, handlePurchases}) {
  let [autoAmount, setAutoAmount] = useState(0);
  let [autoValue, setAutoValue] = useState(10);
  const [start, setStart] = useState(false);

  const timerIdRef = useRef(null);

  useEffect(() => {
    if (start) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = setInterval(() => {
        return handleIncrementation(autoAmount * 0.2);
      }, 1000);
    } else {
      clearInterval(timerIdRef.current);
    }
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [start, autoAmount]);

  const buyAutoAdd = () => {
    if (click >= autoValue) {
      handlePurchases(-autoValue);
      setAutoValue((autoValue = autoValue * 1.5));
      setStart(true);
      setAutoAmount((autoAmount = autoAmount + 1));
      handleCPS(autoAmount * 0.2);
    }
  };

  return (
    <>
      <div className="card">
        <h2>Incrementors:</h2>
        <div className="info">
          <p>Owned : {autoAmount} </p>
          <p id="purchase" onClick={buyAutoAdd}>Purchase ({autoValue}c)</p>
        </div>
        <p id="desc">Increase your CPS by 0.2c per second</p>
      </div>
    </>
  );
}
