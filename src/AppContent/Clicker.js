import React, { useState, useRef, useEffect } from 'react';
import '../style.scss';
import Shop from './Shop';
import Upgrades from './Upgrades';
import Stats from '../UI/Stats';

export default function Clicker() {
  let [count, setCount] = useState(0);
  let [cPS, setCPS] = useState(0);
  let [countModifier, setCountModifier] = useState(1);
  const val = 0;

  const incrementCount = () => {
    setCount(count + 1);
  };

  function handleIncrementation(val) {
    setCount((count) => {
      return count + val * countModifier;
    });
  }
  function handlePurchases(val) {
    setCount((count) => {
      return count + val;
    });
  }

  function handleCPS(currentCPS) {
    setCPS((cPS = currentCPS * countModifier));
  }

  function handleUpgrades(val) {
    setCountModifier((countModifier) => {
      return countModifier + val;
    });
  }

  return (
    <>
      <Stats count={count} cPS={cPS} countModifier={countModifier} />
      <div id="contentBody">
        <div id="mainClick">
          <button onClick={incrementCount}> CLICKER </button>
        </div>
        <Shop
          handleIncrementation={handleIncrementation}
          handlePurchases={handlePurchases}
          count={count}
          handleCPS={handleCPS}
        />
        <Upgrades
          count={count}
          handleIncrementation={handleIncrementation}
          handlePurchases={handlePurchases}
          handleUpgrades={handleUpgrades}
        />
      </div>
    </>
  );
}
