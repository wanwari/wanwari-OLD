const Card = props => {

  const style = {
    card: "flex flex-col justify-between bg-white rounded-lg hover:shadow-2xl p-4 mx-8 my-8",
    cardHeader: "text-red-500 font-bold text-2xl mt-2 mb-4",
    cardBody: "border rounded-lg p-2",
    cardTags: "text-red-400 text-right font-light italic pt-3",
    buttonGroup: "mt-4 text-center align-text-bottom",
    cardButtons: "bg-red-400 rounded-lg p-2 text-white hover:bg-red-700 mr-2",
  };

  return(
      <div className={style.card}>

        <div>
          <div className={style.cardHeader}>
            Project Title
          </div>

          <div className={style.cardBody}>
            {props.text}
            <div className={style.cardTags}>
              React, Tailwind, JS, HTML, CSS
            </div>
          </div>
        </div>

        <div className={style.buttonGroup}>
          <button className={style.cardButtons}>View Code</button>
          <button className={style.cardButtons}>Visit Project</button>
        </div>
      </div>
  );

}

export default Card;

