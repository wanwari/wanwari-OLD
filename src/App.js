import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import Tabs from "./components/Tabs/Tabs";

const App = () => {

  const style = {
    container: "flex flex-col h-screen justify-between",
  }

  return(
    <div className={style.container} style={{backgroundColor: "#f96672"}} >
      <Tabs />
      <Search />
      <Footer />
    </div>
  )
}

export default App;
