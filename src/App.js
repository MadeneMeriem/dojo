import Navbar from './Navbar';
import Home from './Home';

function App() {
  const link = "https://reactjs.org";
  return (
    <div className="app">
       <Navbar />
     <div className="content">
      <Home />
    <a href={link}>React website</a>
    </div>
    </div>
   
  );
}

export default App;
