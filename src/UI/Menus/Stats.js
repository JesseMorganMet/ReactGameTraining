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
			<div id="stats">
				<div>
					<h2>Resources</h2>
					<p>Clicks : {Math.round(click * 100) / 100}c</p>
					<p id="desc">+ {Math.round(cPS * 100) / 100} /s</p>
					<p>Big Clicks : {bigClick}bc</p>
				</div>
				<div>
					<h2>Incrementors</h2>
					<p>Small: {autoAmount} ({Math.round((autoAmount * 0.2) * 100) / 100}cps)</p>
					<p>Medium: {mediumAutoAmount} ({Math.round((mediumAutoAmount * 0.6) * 100) / 100}cps)</p>
				</div>
				<div>
					<h2>Upgrades</h2>
					<p>Click Boost: {clickBoost}</p>
					<p>Multipliers: {clickModifier}</p>
				</div>
				<p>x</p>
				<p>x</p>
				<p>x</p>
				<p>x</p>
			</div>
		</>
	);
}
