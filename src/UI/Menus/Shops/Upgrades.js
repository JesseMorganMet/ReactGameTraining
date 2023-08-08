import React from 'react';

export function Upgrades({
  clickBoost,
  clickBoostCost,
  handleClickBoost,
  handleUpgrades,
  upgradeCost,
  upgrade,
}) {
  function buyUpgrade() {
    handleUpgrades();
  }

  function buyClickBoost() {
    handleClickBoost();
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