import './App.css';
import Router from '../../portfolio/src/router';
import HomePage from './component/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <HomePage/>
      <Router/>
    </div>
  );
}

export default App;
