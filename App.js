import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Reactbenefits } from './components/Reactbenefits';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Reactbenefits></Reactbenefits>
        <Button/>

      </header>
    </div>
  );
}

export default App;
