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
							  setStart,
							  mediumAutoAmount,
							  setMediumAutoAmount,
							  mediumAutoValue,
							  setMediumAutoValue,
						  }) {

	let [save, setSave] = useState([]);

	function setSaveData (val) {

		let data = val;

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

		setMediumAutoAmount((mediumAutoAmount = data.mediumAutoAmount));
		setMediumAutoValue((mediumAutoValue = data.mediumAutoValue));
	}

	//Needs to write to "save 1-3"
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
						mediumAutoAmount: mediumAutoAmount,
						mediumAutoValue: mediumAutoValue
					},
				],
			})
		);
		console.log(save);
	}

	// Sorting out savedata

	return (
		<>
			<section className="settings">
				<h3 id="toggle" onClick={titleMenuToggle}>
					X
				</h3>
				<h1>Settings Menu</h1>
				<div id="options">
					<div id="option">
						<h2>Change Name : </h2>
						<input
							type="text"
							id="titleChange"
							name="titleChange"
							value={title}
							onChange={(event) => changeTitle(event.target.value)}
						/>
					</div>
					<div id="option">
						<h2>Save : </h2>
						<button onClick={getSaveData}> Save 1 : {save1.save1.title} </button>
						<button onClick={getSaveData}> Save 2 : {save1.save2.title} </button>
						<button onClick={getSaveData}> Save 3 : {save1.save3.title} </button>
					</div>
					<div id="option">
						<h2>Load : </h2>
						<button onClick={()=>setSaveData(save1.save1)}> Save 1 : {save1.save1.title} </button>
						<button onClick={()=>setSaveData(save1.save2)}> Save 2 : {save1.save2.title} </button>
						<button onClick={()=>setSaveData(save1.save3)}> Save 3 : {save1.save3.title} </button>
					</div>
				</div>
			</section>
		</>
	);
}
