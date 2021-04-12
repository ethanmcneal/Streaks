import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About'
import StyledComponents from './style_components/StyledComponents';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import Streaks from './streaks/StreaksShow';
import StreakForm from './streaks/StreakForm';
import StreakEditForm from './streaks/StreakEditForm';
import Streak from './streaks/Streak';
import Comment from './comments/Comment';
import CommentsStreak from './comments/CommentsStreak';


function App() {
  return (
    <>
    <div style={{backgroundColor: '#E4DFE0'}}>
    <NavBar />
    <FetchUser>
   <Switch>
   <ProtectedRoute exact path='/' component={Home} />
     <Route exact path='/about' component={About} />
     <Route exact path='/streaks' component={Streaks} />
     <Route exact path='/styled' component={StyledComponents} />
     <Route exact path='/register' component={Register} />
     <Route exact path='/login' component={Login} />
     <Route exact path='/streaks/form' component={StreakForm} />
     <Route exact path='/streaks/edit/:id' component={StreakEditForm} />
     <Route exact path='/streaks/:id' component={Streak} />
     {/* <Route exact path='/streak/:id' component={CommentsStreak} /> */}
   </Switch>
   </FetchUser>
   </div>
   </>
  )
}

export default App;
