import React, {useEffect, useRef, useState} from 'react';
import {Header, Footer, Settings, Shop, Stats} from './UI';
import Clicker from './AppContent/Clicker';
import './style.scss';

export default function App () {
	const [isTitleMenuOpen, setTitleMenuOpen] = useState(true);
	const [isStatsOpen, setIsStatsOpen] = useState(true);
	const [isShopOpen, setIsShopOpen] = useState(true);
	let [title, setTitle] = useState('Subtle on brand CHEMET title');

	let [click, setClick] = useState(0);
	let [bigClick, setBigClick] = useState(0);
	let [cPS, setCPS] = useState(0);
	let [clickModifier, setClickModifier] = useState(1);
	let [clickBoost, setClickBoost] = useState(1);

	let [clickBoostCost, setClickBoostCost] = useState(1);
	let [upgradeCost, setUpgradeCost] = useState(20);
	let bigClickCost = 100;
	let [autoAmount, setAutoAmount] = useState(0);
	let [autoValue, setAutoValue] = useState(10);
	let [mediumAutoAmount, setMediumAutoAmount] = useState(0);
	let [mediumAutoValue, setMediumAutoValue] = useState(200);

	let [start, setStart] = useState(false);

	const timerIdRef = useRef(null);
	let upgrade = 1;

	//menu Toggles
	const titleMenuToggle = () => {
		setTitleMenuOpen((isTitleMenuOpen) => !isTitleMenuOpen)
	}
	const statsToggle = () => {
		setIsStatsOpen((isStatsOpen) => !isStatsOpen)
	}
	const shopToggle = () => {
		setIsShopOpen((isShopOpen) => !isShopOpen)
	}

	//menu Toggles

	function changeTitle (newTitle) {
		setTitle(title = newTitle);
	}

	//would be a fetch if i could fetch

	// Big Click Stuff
	const incrementBigClick = () => {
		if (click >= bigClickCost) {
			handlePurchases(bigClickCost);
			setBigClick(bigClick + 1);
		}
	};
	// Big Click Stuff

	// Shop
	function handleIncrementation (val) {
		setClick((click) => {
			return click + val;
		});
	}

	// Generic Purchase
	function handlePurchases (val) {
		setClick((click) => {
			return click - val;
		});
	}
	// Generic Purchase

	function handleCPS () {
		if (click >= autoValue) {
			handlePurchases(autoValue);
			setAutoValue((autoValue = autoValue * 1.5));
			setAutoAmount((autoAmount = autoAmount + 1));
			handleRealCPS()
		}
	}
	function handleMediumCPS() {
		if (click >= mediumAutoValue) {
			handlePurchases(mediumAutoValue);
			setMediumAutoValue((mediumAutoValue = mediumAutoValue * 1.5));
			setMediumAutoAmount((mediumAutoAmount = mediumAutoAmount + 1));
			handleRealCPS()
		}
	}
	function handleRealCPS () {
		setStart(true);
		setCPS((cPS = ((mediumAutoAmount * 0.6) + (autoAmount * 0.2)) * clickModifier))
	}

	useEffect(() => {
		if (start) {
			clearInterval(timerIdRef.current);
			timerIdRef.current = setInterval(() => {
				return handleIncrementation(cPS);
			}, 1000);
		} else {
			clearInterval(timerIdRef.current);
		}
		return () => {
			clearInterval(timerIdRef.current);
		};
	}, [start, cPS]);
	// Shop

	//Upgrade Stuff
	function handleUpgrades () {
		if (click >= upgradeCost) {
			setClickModifier((clickModifier = clickModifier + upgrade));
			handlePurchases(upgradeCost);
			setUpgradeCost((upgradeCost = upgradeCost * 3.5));
			handleRealCPS()
		}
	}

	//Upgrade Stuff

	//ClickBoost Stuff
	function handleClickBoost () {
		if (bigClick >= clickBoostCost) {
			setClickBoost(clickBoost + 1);
			setBigClick(bigClick - clickBoost);
			setClickBoostCost((clickBoostCost = clickBoostCost * 3.5));
		}
	}

	//ClickBoost Stuff

	return (
		<>
			<Header
				titleMenuToggle={titleMenuToggle}
				title={title}
				statsToggle={statsToggle}
				shopToggle={shopToggle}
			/>
			{isTitleMenuOpen &&
				<Settings titleMenuToggle={titleMenuToggle}
						  changeTitle={changeTitle}
						  title={title}
						  setTitle={setTitle}
						  click={click}
						  setClick={setClick}
						  bigClick={bigClick}
						  setBigClick={setBigClick}
						  cPS={cPS}
						  setCPS={setCPS}
						  clickModifier={clickModifier}
						  setClickModifier={setClickModifier}
						  clickBoost={clickBoost}
						  setClickBoost={setClickBoost}
						  clickBoostCost={clickBoostCost}
						  setClickBoostCost={setClickBoostCost}
						  upgradeCost={upgradeCost}
						  setUpgradeCost={setUpgradeCost}
						  autoAmount={autoAmount}
						  setAutoAmount={setAutoAmount}
						  autoValue={autoValue}
						  setAutoValue={setAutoValue}
						  start={start}
						  setStart={setStart}
						  mediumAutoAmount={mediumAutoAmount}
						  setMediumAutoAmount={setMediumAutoAmount}
						  mediumAutoValue={mediumAutoValue}
						  setMediumAutoValue={setMediumAutoValue}
						  statsToggle={statsToggle}
						  shopToggle={shopToggle}
				/>
			}
			<main>
				<div id="display">
					{isStatsOpen && (
						<Stats
							click={click}
							bigClick={bigClick}
							autoAmount={autoAmount}
							mediumAutoAmount={mediumAutoAmount}
							cPS={cPS}
							clickModifier={clickModifier}
							clickBoost={clickBoost}
							statsToggle={statsToggle}
						/>
					)}
					<Clicker
						click={click}
						setClick={setClick}
						clickBoost={clickBoost}
						cPS={cPS}
					/>
					{isShopOpen && (
						<Shop
							shopToggle={shopToggle}

							handleCPS={handleCPS}
							autoValue={autoValue}
							handleMediumCPS={handleMediumCPS}
							mediumAutoValue={mediumAutoValue}

							clickBoost={clickBoost}
							clickBoostCost={clickBoostCost}
							handleClickBoost={handleClickBoost}
							handleUpgrades={handleUpgrades}
							upgradeCost={upgradeCost}
							upgrade={upgrade}

							bigClickCost={bigClickCost}
							incrementBigClick={incrementBigClick}
						/>
					)}

				</div>
			</main>
			<Footer/>
		</>
	);
}
