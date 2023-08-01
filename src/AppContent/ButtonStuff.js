import React, { useState, useRef, useEffect } from 'react';

export default function ButtonStuff() {
  let [click, setClick] = useState(0);
  let [autoAmount, setAutoAmount] = useState(0);
  let [autoValue, setAutoValue] = useState(10);
  const [start, setStart] = useState(false);

  const timerIdRef = useRef(null);

  useEffect(() => {
    if (start) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = setInterval(() => {
        setClick((click) => {
          console.log(click);
          return click + autoAmount * 0.2;
        });
      }, 2000);
    } else {
      clearInterval(timerIdRef.current);
    }
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [start, autoAmount]);

  const incrementClick = () => {
    setClick(click + 1);
  };

  const buyAutoAdd = () => {
    if (click >= autoValue) {
      setClick(click - autoValue);
      setAutoValue((autoValue = autoValue * 1.5));
      setStart(true);
      setAutoAmount((autoAmount = autoAmount + 1));
    }
  };

  return (
    <>
      <button onClick={incrementClick}> CLICK </button>
      <h1>Clicks : {Math.round(click * 100) / 100}</h1>
      <button onClick={buyAutoAdd}>BUY AUTO</button>
      <h1>Auto Amount:{autoAmount}</h1>
      <h1>Auto Value:{autoValue}</h1>
    </>
  );
}
