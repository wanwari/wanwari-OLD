const Card = (props) => {
	const style = {
		card: "flex flex-col justify-between bg-white rounded-lg hover:shadow-2xl p-4 mx-8 my-8",
		cardHeader: "text-red-500 font-bold text-2xl mt-2 mb-4",
		cardBody: "border rounded-lg p-2",
		desc: "p-4",
		img: "w-full p-4",
		cardTags: "text-red-400 text-right font-light italic pt-3",
		buttonGroup: "mt-4 text-center align-text-bottom",
		cardButtons:
			"bg-red-400 rounded-lg p-2 text-white hover:bg-red-600 mr-2",
	};

	return (
		<div className={style.card}>
			<div>
				<div className={style.cardHeader}>{props.projectTitle}</div>

				<div className={style.cardBody}>
					<div className={style.desc}>{props.description}</div>
					<div className={style.cardTags}>{props.tags}</div>
				</div>
			</div>

			<div className={style.buttonGroup}>
				<a
					href={props.codeURL}
					target="_blank"
					rel="noreferrer"
					className={style.cardButtons}
				>
					View Code
				</a>
				{props.projectURL && (
					<a
						href={props.projectURL}
						target="_blank"
						rel="noreferrer"
						className={style.cardButtons}
					>
						Visit Project
					</a>
				)}
			</div>
		</div>
	);
};

export default Card;
