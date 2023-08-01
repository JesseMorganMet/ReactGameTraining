import React, { useState, useRef, useEffect } from 'react';

export default function ButtonStuff() {
  let [count, setCount] = useState(0);
  let [autoAmount, setAutoAmount] = useState(0);
  let [autoValue, setAutoValue] = useState(10);
  const [start, setStart] = useState(false);

  const timerIdRef = useRef(null);

  useEffect(() => {
    if (start) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = setInterval(() => {
        setCount((count) => {
          console.log(count);
          return count + autoAmount * 0.2;
        });
      }, 2000);
    } else {
      clearInterval(timerIdRef.current);
    }
    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [start, autoAmount]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const buyAutoAdd = () => {
    if (count >= autoValue) {
      setCount(count - autoValue);
      setAutoValue((autoValue = autoValue * 1.5));
      setStart(true);
      setAutoAmount((autoAmount = autoAmount + 1));
    }
  };

  return (
    <>
      <button onClick={incrementCount}> CLICK </button>
      <h1>Count: {Math.round(count * 100) / 100}</h1>

      <button onClick={buyAutoAdd}>BUY AUTO</button>
      <h1>Auto Amount:{autoAmount}</h1>
      <h1>Auto Value:{autoValue}</h1>
    </>
  );
}
