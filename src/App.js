import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Home />
      </Router>
    </div>
  );
}

export default App;
