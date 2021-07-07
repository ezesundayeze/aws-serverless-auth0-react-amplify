import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Login from "./Components/Login";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={ Home }  />
        <Route path="/auth" exact component={ Login } />
      </Switch>
    </div>
  );
}

export default App;