import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
function App() {
  const link = "https://reactjs.org";
  return (
      <Router>
          <div className="app">
        <Navbar />
          <div className="content">
          <Switch>
            <Route exact  path='/'>
              <Home />
            </Route>
            
          </Switch>
          </div>
      </div>
      </Router>
   
  );
}

export default App;
