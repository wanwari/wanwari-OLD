import Tabs from "../components/Tabs/Tabs";
import AddressBar from "../components/AddressBar/AddressBar";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";

const style = {
	container: "flex flex-col h-screen justify-between bg-gray-300",
};

const Portfolio = () => {
	return (
		<div className={style.container}>
			<div>
				<Tabs active={1} />
				<AddressBar pageName="portfolio" />
			</div>

			<Project />

			<Footer />
		</div>
	);
};

export default Portfolio;
