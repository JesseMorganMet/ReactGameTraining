import React from 'react';
import "../../UIStyles.scss";
import {Incrementors, Upgrades, Resources} from '../../index';

export function Shop ({
						  autoValue,
						  handleCPS,
						  clickBoost,
						  clickBoostCost,
						  handleClickBoost,
						  handleUpgrades,
						  upgradeCost,
						  upgrade,
						  incrementBigClick,
						  bigClickCost,
						  handleMediumCPS,
						  mediumAutoValue,
						  shopToggle
					  }) {

	return (
		<>
			<div id="shop" className="hangRight">
				<h3 id="toggle" onClick={shopToggle}>
					X
				</h3>
				<h2>Shop</h2>
				<Incrementors
					handleCPS={handleCPS}
					autoValue={autoValue}
					handleMediumCPS={handleMediumCPS}
					mediumAutoValue={mediumAutoValue}
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
		</>
	);
}
