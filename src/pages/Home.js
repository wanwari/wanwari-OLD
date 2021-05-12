import Tabs from "../components/Tabs/Tabs";
import AddressBar from "../components/AddressBar/AddressBar";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";

const style = {
  container: "flex flex-col h-screen justify-between",
}

const Home = () => {

  const screenWidth = window.screen.width;
  const responsiveAddressBar = (screenWidth >= 1024) ? <AddressBar pageName=""/> : null;

  return(
    <div className={style.container} style={{backgroundColor: "#f96672"}} >
      <div>
        <Tabs active={0}/>
        {responsiveAddressBar}
      </div>
      <Search />
      <Footer />
    </div>
  );
}

export default Home;
