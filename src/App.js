import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Tabs from "./components/Tabs/Tabs";
import AddressBar from "./components/AddressBar/AddressBar";

const App = () => {

  const style = {
    container: "flex flex-col h-screen justify-between",
  }

  return(
    <div className={style.container} style={{backgroundColor: "#f96672"}} >
      <div>
        <Tabs active={0}/>
        <AddressBar />
      </div>
      <Search />
      <Footer />
    </div>
  )
}

export default App;
