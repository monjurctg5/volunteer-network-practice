import logo from './logo.svg';
import './App.css';
import Login from './Componets/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Componets/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"
import Home from './Componets/Home/Home';
import Header from './Componets/Header/Header';
import AddEvent from './Componets/AddEvents/AddEvent';
import MyEvents from './Componets/MyEvents/MyEvents';
import ResiterASVolunteer from './Componets/ResiterASVolunteer/ResiterASVolunteer';
import Admin from './Componets/Admin/Admin';
import AdminDash from './Componets/AdminDashBord/AdminDash';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
          <Route exact path="/myEvents">
            <MyEvents></MyEvents>
          </Route>
          <Route path="/volunteerRegister">
            <ResiterASVolunteer></ResiterASVolunteer>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route exact path="/adminDash">
            <AdminDash></AdminDash>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
