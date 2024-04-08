import logo from './logo.svg';
import './App.css';
import FetchWeather from './components/FetchWeather.jsx';
function App() {
  return (
    <div className='Weather-App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>OpenWeatherMap API</p>
      </header>
      <FetchWeather />
    </div>
  );
}

export default App;
