import React from 'react';
import "../../UIStyles.scss";
import {Incrementors, Upgrades, Resources} from '../../index';

export function Shop ({
	autoAmount,
	autoValue,
	handleCPS,
	clickBoost,
	clickBoostCost,
	handleClickBoost,
	handleUpgrades,
	upgradeCost,
	upgrade,
	incrementBigClick,
	bigClickCost
}) {

	return (
		<>
			<div id="shop">
				<h2>Shop:</h2>
				<Incrementors
					handleCPS={handleCPS}
					autoAmount={autoAmount}
					autoValue={autoValue}
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
