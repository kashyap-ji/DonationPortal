import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/projects-page/projects';
import Projectdetail from './Pages/projectdetail';
import MyProfile from './Pages/profile/myProfile';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <Navbar/>
        </header> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <Navbar/>
              </header>
              <Home/>
            </Route>
            <Route exact path="/projects.js">
              <Projects/>
            </Route>
            <Route exact path="/myprofile.js">
              <MyProfile />
            </Route>
            <Route exact path="/projectdetail.js">
              <Projectdetail/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
