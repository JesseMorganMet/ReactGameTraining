import React, { useState } from 'react';

export default function Upgrades({
  click,
  handleUpgrades,
  handlePurchases,
  handleClickBoost,
  bigClick,
}) {
  let [upgradeCost, setUpgradeCost] = useState(20);
  let [clickBoostCost, setClickBoostCost] = useState(1);
  let upgrade = 1;
  let clickBoost = 1;

  function buyUpgrade() {
    if (click >= upgradeCost) {
      handleUpgrades(upgrade);
      handlePurchases(-upgradeCost);
      setUpgradeCost((upgradeCost = upgradeCost * 3.5));
    }
  }

  function buyClickBoost() {
    if (bigClick >= clickBoostCost) {
      handleClickBoost(clickBoost);
      setClickBoostCost((clickBoostCost = clickBoostCost * 3.5));
    }
  }

  return (
    <>
      <div className="card">
        <h2>Upgrades:</h2>
        <div className="info">
          <p>Multipliers : </p>
          <p id="purchase" onClick={buyUpgrade}>
            Purchase ({upgradeCost}c)
          </p>
        </div>
        <p id="desc">Increase your CPS multiplier by {upgrade}</p>

        <div className="info">
          <p>Click Boost : </p>
          <p id="purchase" onClick={buyClickBoost}>
            Purchase ({clickBoostCost}bc)
          </p>
        </div>
        <p id="desc">Increase your clicks per click by {clickBoost}</p>
      </div>
    </>
  );
}
