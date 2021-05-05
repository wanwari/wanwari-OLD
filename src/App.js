import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from "react-router-dom";

  const style = {
    container: "flex flex-col h-screen justify-between",
  }

const App = () => {
  return(
    <div>
      <BrowserRouter>

        <Switch>
          <Route exact path="/" render={() => <Home/>} />
          <Route exact path="/home" render={() => <Home/>} />
          <Route exact path="/portfolio" render={() => (<h1>Portfolio</h1>)} />
          <Route exact path="/contact" render={() => (<h1>Contact</h1>)} />
          <Route render={() => (<h1>Error 404</h1>)}/>
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App;
