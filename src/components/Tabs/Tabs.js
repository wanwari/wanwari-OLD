import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Tabs = (props) => {
	let history = useHistory();

	useEffect(() => {
		const el = document.querySelector(".chrome-tabs");
		let ChromeTabs = window.ChromeTabs;
		let chromeTabs = new ChromeTabs();

		chromeTabs.init(el, history);

		setTimeout(() => {
			chromeTabs.addTab(
				{
					title: "Home",
					favicon: false,
				},
				{
					animate: true,
					background: props.active === 0 ? false : true,
				}
			);
		}, 100);

		setTimeout(() => {
			chromeTabs.addTab(
				{
					title: "Portfolio",
					favicon: false,
				},
				{
					animate: true,
					background: props.active === 1 ? false : true,
				}
			);
		}, 400);

		setTimeout(() => {
			chromeTabs.addTab(
				{
					title: "Contact",
					favicon: false,
				},
				{
					animate: true,
					background: props.active === 2 ? false : true,
				}
			);
		}, 700);
	}, [history, props.active]);

	return (
		<div className="chrome-tabs">
			<div className="chrome-tabs-content"></div>
			{/* <div className="chrome-tabs-bottom-bar"></div> */}
		</div>
	);
};

export default Tabs;
