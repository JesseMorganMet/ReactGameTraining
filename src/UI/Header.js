import React from 'react';
import "./UIStyles.scss";

export function Header ({
							titleMenuToggle,
							title,
							statsToggle,
							shopToggle
						}) {
	return (
		<>
			<div id="header">
				<h1>{title}</h1>
				<p id="toggle" onClick={titleMenuToggle}>
					Settings
				</p>
				<div id="menus">
					<p onClick={statsToggle}>Stats</p>
					<p onClick={shopToggle}>Shop</p>
					<p>option</p>
					<p>option</p>
					<p>option</p>
					<p>option</p>
					<p>option</p>
				</div>
			</div>
		</>
	);
}
