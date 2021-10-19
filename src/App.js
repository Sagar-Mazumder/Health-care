import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home/Home';
import Seemore from './components/Seemore/Seemore';
import Register from './components/Register/Register';
import Error from './components/Error/Error'
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';


function App() {

  return (
    <div className="">

      <Router>
        <AuthProvider>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/seemore/:serviceId">
              <Seemore></Seemore>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </AuthProvider>
      </Router>

    </div>

  );
}

export default App;
