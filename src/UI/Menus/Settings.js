import React, {useState} from 'react';
import "../UIStyles.scss";
import save1 from '../../Data/save1.json';

export function Settings ({
							  titleMenuToggle,
							  changeTitle,
							  title,
							  setTitle,
							  click,
							  setClick,
							  bigClick,
							  setBigClick,
							  cPS,
							  setCPS,
							  clickModifier,
							  setClickModifier,
							  clickBoost,
							  setClickBoost,
							  clickBoostCost,
							  setClickBoostCost,
							  upgradeCost,
							  setUpgradeCost,
							  autoAmount,
							  setAutoAmount,
							  autoValue,
							  setAutoValue,
							  start,
							  setStart
						  }) {

	let [save, setSave] = useState([]);
	let data = save1.default

	function setSaveData () {
		setTitle((title = data.title));
		setClick((click = data.click));
		setBigClick((bigClick = data.bigClick));
		setCPS((cPS = data.cPS));
		setClickModifier((clickModifier = data.clickModifier));
		setClickBoost((clickBoost = data.clickBoost));
		setStart((start = data.start));

		setClickBoostCost((clickBoostCost = data.clickBoostCost));
		setUpgradeCost((upgradeCost = data.upgradeCost));
		setAutoAmount((autoAmount = data.autoAmount));
		setAutoValue((autoValue = data.autoValue));

		//not needed after real algorithm is made +/ real savedata
		if (data.start) {
			setAutoValue((autoValue = autoValue * 1.5));
			setCPS((cPS = autoAmount * 0.2 * clickModifier));
			if (clickModifier > 1) {
				setUpgradeCost((upgradeCost = upgradeCost * 3.5));
			}
			if (clickBoost > 1) {
				setClickBoostCost((clickBoostCost = clickBoostCost * 3.5));
			}
			console.log("stuff")
		}

		getSaveData();
	}

	function getSaveData () {
		setSave(
			(save = {
				save: [
					{
						title: title,
						click: click,
						bigClick: bigClick,
						cPS: cPS,
						clickModifier: clickModifier,
						clickBoost: clickBoost,
						clickBoostCost: clickBoostCost,
						upgradeCost: upgradeCost,
						autoAmount: autoAmount,
						autoValue: autoValue,
						start: start,
					},
				],
			})
		);
		console.log(save);
		return save;
	}

	// Sorting out savedata

	return (
		<>
			<section className="titleMenu">
				<h3 id="toggle" onClick={titleMenuToggle}>
					X
				</h3>
				<h1>Please enter a name</h1>
				<input
					type="text"
					id="titleChange"
					name="titleChange"
					value={title}
					onChange={(event) => changeTitle(event.target.value)}
				/>
				<h1>Save</h1>
				<button onClick={getSaveData}/>
				<h1>Load</h1>
				<div>
					<p>File one</p>
					<button onClick={setSaveData}> {data.title} </button>
				</div>
			</section>
		</>
	);
}
