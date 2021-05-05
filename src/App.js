import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return(
    <div>
      <BrowserRouter>

        <Switch>
          <Route exact path="/" render={() => <Home/>} />
          <Route exact path="/home" render={() => <Home/>} />
          <Route exact path="/portfolio" render={() => <Portfolio/>} />
          <Route exact path="/contact" render={() => <Contact/>} />
          <Route render={() => (<h1>Error 404</h1>)}/>
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App;
