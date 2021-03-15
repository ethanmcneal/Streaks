import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About'


function App() {
  return (
    <>
    <NavBar />
   <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/about' component={About} />
   </Switch>
   </>
  )
}

export default App;
