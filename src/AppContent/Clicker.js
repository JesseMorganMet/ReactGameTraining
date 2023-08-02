import React, { useState, useEffect } from 'react';
import Stats from '../UI/Stats';
import Shop from './Shop';
import Upgrades from './Upgrades';
import Resources from './Resources';
import './AppContentStyles.scss';

export default function Clicker({ statsIsOpen, shopIsOpen, saveClicked }) {
  let [save, setSave] = useState([]);
  let [click, setClick] = useState(0);
  let [bigClick, setBigClick] = useState(0);
  let [cPS, setCPS] = useState(0);
  let [clickModifier, setClickModifier] = useState(1);
  let [clickBoost, setClickBoost] = useState(1);
  const val = 0;

  useEffect(() => {
      getValues()
  }, [saveClicked]);

  function getValues() {
    setSave(
      (save = {
        save: [
          {
            click: click,
            bigClick: bigClick,
            cPS: cPS,
            clickModifier: clickModifier,
            clickBoost: clickBoost,
          },
        ],
      })
    );
    console.log(save)
    return save;
  }

  const incrementClick = () => {
    setClick(click + clickBoost);
  };

  const incrementBigClick = () => {
    setClick(click - 100);
    setBigClick(bigClick + 1);
  };

  function handleIncrementation(val) {
    setClick((click) => {
      return click + val * clickModifier;
    });
  }
  function handlePurchases(val) {
    setClick((click) => {
      return click + val;
    });
  }

  function handleCPS(currentCPS) {
    setCPS((cPS = currentCPS * clickModifier));
  }

  function handleUpgrades(val) {
    setClickModifier((clickModifier) => {
      return clickModifier + val;
    });
  }

  function handleClickBoost(val) {
    setClickBoost(clickBoost + 1);
    setBigClick(bigClick - val);
  }

  return (
    <>
      <div id="display">
        {statsIsOpen && (
          <Stats
            click={click}
            bigClick={bigClick}
            cPS={cPS}
            clickModifier={clickModifier}
            clickBoost={clickBoost}
          />
        )}
        <div id="clicker" onClick={incrementClick}></div>
        {shopIsOpen && (
          <div id="shop">
            <h2>Shop:</h2>
            <Shop
              click={click}
              handleIncrementation={handleIncrementation}
              handlePurchases={handlePurchases}
              handleCPS={handleCPS}
            />
            <Upgrades
              click={click}
              bigClick={bigClick}
              handleIncrementation={handleIncrementation}
              handlePurchases={handlePurchases}
              handleUpgrades={handleUpgrades}
              handleClickBoost={handleClickBoost}
            />
            <Resources click={click} incrementBigClick={incrementBigClick} />
          </div>
        )}
      </div>
    </>
  );
}
