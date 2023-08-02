import React, { useState, useEffect, useRef } from 'react';
import Stats from '../UI/Stats';
import Shop from './Shop';
import Upgrades from './Upgrades';
import Resources from './Resources';
import save1 from '../Data/save1.json';
import './AppContentStyles.scss';

export default function Clicker({
  statsIsOpen,
  shopIsOpen,
  saveClicked,
  loading,
}) {
  let [save, setSave] = useState([]);
  let [click, setClick] = useState(0);
  let [bigClick, setBigClick] = useState(0);
  let [cPS, setCPS] = useState(0);
  let [clickModifier, setClickModifier] = useState(1);
  let [clickBoost, setClickBoost] = useState(1);

  let [clickBoostCost, setClickBoostCost] = useState(1);
  let [upgradeCost, setUpgradeCost] = useState(20);
  let [bigClickCost, setBigClickCost] = useState(100);
  let [autoAmount, setAutoAmount] = useState(0);
  let [autoValue, setAutoValue] = useState(10);

  const [start, setStart] = useState(false);

  const timerIdRef = useRef(null);
  let upgrade = 1;

  //would be a fetch if i could fetch
  // Sorting out savedata
  useEffect(() => {
    if (loading == false) {
      setValues(save1.save[0]);
      getValues(save);
    }
  }, [loading]);

  useEffect(() => {
    getValues();
  }, [saveClicked]);

  function setValues(data) {
    setClick((click = data.click));
    setBigClick((bigClick = data.bigClick));
    setCPS((cPS = data.cPS));
    setClickModifier((clickModifier = data.clickModifier));
    setClickBoost((clickBoost = data.clickBoost));

    setClickBoostCost((clickBoostCost = data.clickBoostCost));
    setUpgradeCost((upgradeCost = data.upgradeCost));
    setBigClickCost((bigClickCost = data.bigClickCost));
    setAutoAmount((autoAmount = data.autoAmount));
    setAutoValue((autoValue = data.autoAmount));

    getValues();
  }

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
            clickBoostCost: clickBoostCost,
            upgradeCost: upgradeCost,
            bigClickCost: bigClickCost,
            autoAmount: autoAmount,
            autoValue: autoValue,
          },
        ],
      })
    );
    console.log(save);
    return save;
  }
  // Sorting out savedata

  // Standard If Clicker is Clicked
  const incrementClick = () => {
    setClick(click + clickBoost);
  };
  // Standard If Clicker is Clicked

  // Big Click Stuff
  const incrementBigClick = () => {
    if (click >= bigClickCost) {
      setClick(click - 100);
      setBigClick(bigClick + 1);
    }
  };
  // Big Click Stuff

  // Shop
  function handleIncrementation(val) {
    setClick((click) => {
      return click + val * clickModifier;
    });
  }

  function handleCPS() {
    if (click >= autoValue) {
      handlePurchases(autoValue);
      setAutoValue((autoValue = autoValue * 1.5));
      setStart(true);
      setAutoAmount((autoAmount = autoAmount + 1));
      setCPS((cPS = autoAmount * 0.2 * clickModifier));
    }
  }

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
  // Shop

  // Generic Purchase
  function handlePurchases(val) {
    setClick((click) => {
      return click - val;
    });
  }
  // Generic Purchase

  //Upgrade Stuff
  function handleUpgrades() {
    if (click >= upgradeCost) {
      setClickModifier((clickModifier = clickModifier + upgrade));
      handlePurchases(upgradeCost);
      setUpgradeCost((upgradeCost = upgradeCost * 3.5));
    }
  }
  //Upgrade Stuff

  //ClickBoost Stuff
  function handleClickBoost() {
    if (bigClick >= clickBoostCost) {
      setClickBoost(clickBoost + 1);
      setBigClick(bigClick - clickBoost);
      setClickBoostCost((clickBoostCost = clickBoostCost * 3.5));
    }
  }
  //ClickBoost Stuff

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
              handleIncrementation={handleIncrementation}
              handlePurchases={handlePurchases}
              handleCPS={handleCPS}
              autoAmount={autoAmount}
              autoValue={autoValue}
              start={start}
            />
            <Upgrades
              clickBoost={clickBoost}
              clickBoostCost={clickBoostCost}
              handleClickBoost={handleClickBoost}
              handleUpgrades={handleUpgrades}
              upgradeCost={upgradeCost}
              upgrade={upgrade}
            />
            <Resources
              bigClickCost={bigClickCost}
              incrementBigClick={incrementBigClick}
            />
          </div>
        )}
      </div>
    </>
  );
}
