import Tabs from "../components/Tabs/Tabs";
import AddressBar from "../components/AddressBar/AddressBar";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";

const style = {
	container: "flex flex-col h-screen justify-between bg-gray-300",
};

const Portfolio = () => {
	const screenWidth = window.screen.width;
	const responsiveAddressBar =
		screenWidth >= 1024 ? <AddressBar pageName="portfolio" /> : null;
	return (
		<div className={style.container}>
			<div>
				<Tabs active={1} />
				{responsiveAddressBar}
			</div>

			<Project />

			<Footer />
		</div>
	);
};

export default Portfolio;
