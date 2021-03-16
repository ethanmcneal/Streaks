import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About'
import StyledComponents from './style_components/StyledComponents';


function App() {
  return (
    <>
    <NavBar />
   <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/about' component={About} />
     <Route exact path='/styled' component={StyledComponents} />
   </Switch>
   </>
  )
}

export default App;
