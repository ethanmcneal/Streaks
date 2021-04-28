import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import About from './components/About'
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import Streaks from './streaks/StreaksShow';
import StreakForm from './streaks/StreakForm';
import StreakEditForm from './streaks/StreakEditForm';
import Streak from './streaks/Streak';
import UserStreak from './user_streak/UserStreaks'
import MyDashBoard from './pages/MyDashBoard';
import DashHeader from './components/Secondheader';
import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import SearchResults from './components/SearchResults';
import UserEdit from './pages/UserEdit';





function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <div>
    {user && <NavBar />}
    {/* <NavBar /> */}
    {user && <DashHeader/>}
    <FetchUser>
      <div>
   <Switch>
   <Route exact path='/' component={Home} />
   <ProtectedRoute exact path='/dashboard' component={MyDashBoard} />
     <Route exact path='/about' component={About} />
     <ProtectedRoute exact path='/streaks' component={Streaks} />
     {/* <Route exact path='/styled' component={StyledComponents} /> */}
     <Route exact path='/register' component={Register} />
     <Route exact path='/login' component={Login} />
     <ProtectedRoute exact path='/userEdit' component={UserEdit} />
     <ProtectedRoute exact path='/streaks/form' component={StreakForm} />
     <ProtectedRoute exact path='/streaks/edit/:id' component={StreakEditForm} />
     <ProtectedRoute exact path='/streaks/:id' component={Streak} />
     {/* <Route exact path='/streak/:id' component={CommentsStreak} /> */}
     <ProtectedRoute exact path='/user' component={UserStreak} />
     <ProtectedRoute exact path='/results' component={SearchResults} />
   </Switch>
   </div>
   </FetchUser>
   </div>
   </>
  )
}

export default App;
