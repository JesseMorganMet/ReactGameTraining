import React from 'react';
import "../UIStyles.scss";

export function Stats ({
						   click,
						   cPS,
						   clickModifier,
						   bigClick,
						   clickBoost,
						   autoAmount,
						   mediumAutoAmount
					   }) {
	return (
		<>
			<div id="shop" className="hangLeft">
				<h2>Stats</h2>
				<div className="card">
					<h2>Resources</h2>
					<div id="desc">
						<p>Clicks : {Math.round(click * 100) / 100}c</p>
						<p className="indent">+{Math.round(cPS * 100) / 100}/s</p>
						<p>Big Clicks : {bigClick}bc</p>
					</div>
				</div>
				<div className="card">
					<h2>Incrementors</h2>
					<div id="desc">
						<p>Small: {autoAmount} ({Math.round((autoAmount * 0.2) * 100) / 100}cps)</p>
						<p>Medium: {mediumAutoAmount} ({Math.round((mediumAutoAmount * 0.6) * 100) / 100}cps)</p>
					</div>
				</div>
				<div className="card">
					<h2>Upgrades</h2>
					<div id="desc">
						<p>Click Boost: {clickBoost}</p>
						<p>Multipliers: {clickModifier}</p>
					</div>
				</div>
			</div>
		</>
	);
}
