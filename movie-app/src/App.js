import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import MovieDetail from "./components/MovieDetail";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/movies/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
