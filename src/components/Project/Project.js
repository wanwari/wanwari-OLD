import Card from "../Card/Card";

const Project = () => {
	const style = {
		container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300",
	};

	return (
		<div className={style.container}>
			<Card
				projectTitle={"Screen Capture"}
				description={
					"A screen capturing program built using Java. Select the area you would like to capture and save it to your computer or upload online."
				}
				tags={"Java"}
				codeURL={"https://github.com/wanwari/screen-capture"}
			/>
			<Card
				projectTitle={"Spelling Bzz"}
				description={
					"Use the given letter bank, and key letter to find as many words as you can."
				}
				tags={
					"Back-End, NodeJS, ExpressJS, Front-End, React, Tailwind, JS, HTML, CSS"
				}
				codeURL={"https://github.com/wanwari/spelling-bee"}
				projectURL={"https://spelling-bzz.netlify.app/"}
			/>
			<Card
				projectTitle={"wanwari.ca"}
				description={
					"Personal portfolio website used to display the projects I've created and a way to get in contact with me"
				}
				tags={"Front-End, React, Tailwind, JS, HTML, CSS"}
				codeURL={"https://github.com/wanwari/wanwari"}
				projectURL={"https://wanwari.ca/"}
			/>
			<Card
				projectTitle={"Weather App"}
				description={
					"A weather app that displays various weather related information about any city. Also displays locations on a map and contains search history"
				}
				tags={"Front-End, React, React-Bootstrap, JS, HTML, CSS"}
				codeURL={"https://github.com/wanwari/weather-app"}
				projectURL={"https://weather-app-wanwari.netlify.app/"}
			/>
			<Card
				projectTitle={"To-Do"}
				description={
					"A simple to-do list application built using react."
				}
				tags={"Front-End, React, JS, HTML, CSS"}
				codeURL={"https://github.com/wanwari/react-to-do"}
				projectURL={"https://to-do-wanwari.netlify.app/"}
			/>
		</div>
	);
};

export default Project;
