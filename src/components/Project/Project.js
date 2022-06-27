import Card from "../Card/Card";
import wanwari from "../../img/wanwari_ss.png";

const Project = () => {
	const style = {
		container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300",
		card: "flex-grow",
	};

	return (
		<div className={style.container}>
			<Card
				className={style.card}
				projectTitle={"wanwari.ca"}
				description={
					"Personal portfolio website used to display the projects I've created and a way to get in contact with me"
				}
				imgPath={wanwari}
				tags={"REACT, TAILWIND, JS, HTML, CSS"}
				codeURL={"https://github.com/wanwari/wanwari"}
				projectURL={"https://wanwari.ca/"}
			/>
		</div>
	);
};

export default Project;
