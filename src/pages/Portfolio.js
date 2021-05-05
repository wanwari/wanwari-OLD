import Tabs from "../components/Tabs/Tabs";
import AddressBar from "../components/AddressBar/AddressBar";
import Footer from "../components/Footer/Footer";

const style = {
  container: "flex flex-col h-screen justify-between",
}

const Portfolio = () => {
  return(
    <div className={style.container} style={{backgroundColor: "#f96672"}} >
      <div>
        <Tabs active={1}/>
        <AddressBar pageName="portfolio"/>
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
