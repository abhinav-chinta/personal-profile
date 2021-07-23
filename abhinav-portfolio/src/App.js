import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home'
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from 'react-bootstrap';

function App() {
  return(
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>


  );
  
}

export default App;
