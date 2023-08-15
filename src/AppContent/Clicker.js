import React from 'react';
import './AppContentStyles.scss';

export default function Clicker ({
									 click,
									 setClick,
									 clickBoost,
									 cPS
								 }) {

	// If Clicker is Clicked
	const incrementClick = () => {
		setClick(click + clickBoost);
	};
	// If Clicker is Clicked

	return (
		<>
			<div id="contentBody">
				<div id="clicker" onClick={incrementClick}/>
				<div id="activeDisplay">
					<p>{Math.round(click * 100) / 100} <br/>+ {cPS} /s</p>
				</div>
			</div>
		</>
	);
}
