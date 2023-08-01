import React, {useState} from 'react';

export default function Upgrades({ count, handleUpgrades, handlePurchases }){
  let [upgradeCost, setUpgradeCost] = useState(20);
  let upgrade = 1;

  function buyUpgrade(){
    if(count >= upgradeCost){
      handleUpgrades(upgrade)
      handlePurchases(-upgradeCost);
      setUpgradeCost((upgradeCost = upgradeCost * 3.5));
    }
  }

  return (
    <>
      <div className="card">
        <h2>Upgrades:</h2>
        <div className="info">
          <p>Multipliers </p>
          <p>Value : {upgradeCost} </p>
          <button onClick={buyUpgrade}>Purchase</button>
        </div>
      </div>
    </>
  );
}