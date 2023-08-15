import React from 'react';

export function Incrementors({
						 autoValue,
						 handleCPS,
						 handleMediumCPS,
						 mediumAutoValue
					 }) {

	function buyAutoAdd() {
		handleCPS();
	}
	function buyAutoAddMedium() {
		handleMediumCPS();
	}

	return (
		<>
			<div className="card">
				<h2>Incrementors:</h2>
				<div className="info">
					<p>Small : </p>
					<p id="purchase" onClick={buyAutoAdd}>
						Purchase ({Math.round(autoValue * 100) / 100}c)
					</p>
				</div>
				<p id="desc">Increase your CPS by 0.2c per second</p>
				<div className="info">
					<p>Medium : </p>
					<p id="purchase" onClick={buyAutoAddMedium}>
						Purchase ({Math.round(mediumAutoValue * 100) / 100}c)
					</p>
				</div>
				<p id="desc">Increase your CPS by 0.6c per second</p>
			</div>
		</>
	);
}
