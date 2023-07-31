import React, {useState} from 'react';
import '../style.scss';

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
      <section className="shop">
        <h2>Upgrades:</h2>
        <div className="card">
          <div className="info">
            <p>upgrade1 : {upgradeCost} </p>
            <button onClick={buyUpgrade}>Purchase</button>
          </div>
        </div>
      </section>
    </>
  );
}