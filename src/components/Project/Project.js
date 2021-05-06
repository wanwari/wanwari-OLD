import Card from "../Card/Card";

const Project = () => {

  const style = {
    container: "grid grid-flow-rows grid-cols-3 grid-rows-3 bg-gray-300 flex items-start",
    card: "flex-grow"
  };

  return(
    <div className={style.container}>
      <Card className={style.card} 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis. Egestas integer eget aliquet nibh praesent tristique. Ullamcorper a lacus vestibulum sed arcu non. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Sem integer vitae justo eget magna fermentum iaculis eu."    
      />
      <Card className={style.card} 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis."    
      />
      <Card className={style.card} 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis. Egestas integer eget aliquet nibh praesent tristique. Ullamcorper a lacus vestibulum sed arcu non. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Sem integer vitae justo eget magna fermentum iaculis eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis. Egestas integer eget aliquet nibh praesent tristique. Ullamcorper a lacus vestibulum sed arcu non. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Sem integer vitae justo eget magna fermentum iaculis eu."    
      />
      <Card className={style.card} 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis. Egestas integer eget aliquet nibh praesent tristique. Ullamcorper a lacus vestibulum sed arcu non. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Sem integer vitae justo eget magna fermentum iaculis eu."    
      />
      <Card className={style.card} 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis. Egestas integer eget aliquet nibh praesent tristique. Ullamcorper a lacus vestibulum sed arcu non. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Sem integer vitae justo eget magna fermentum iaculis eu."    
      />
      <Card className={style.card} 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat vivamus at augue eget arcu dictum varius duis. Egestas integer eget aliquet nibh praesent tristique. Ullamcorper a lacus vestibulum sed arcu non. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Sem integer vitae justo eget magna fermentum iaculis eu."    
      />
    </div>
  );
}

export default Project;
