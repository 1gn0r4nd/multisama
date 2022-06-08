import './assets/css/fonts.css';
import './assets/css/App.css';
import NavigationBar from './components/NavigationBar';
import MoonsamaCarnageStats from './components/MoonsamaCarnageStats';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
      <h1>Pondsama</h1>
      <MoonsamaCarnageStats player='1gn0r4nd' year={2022} />
      </div>
    </div>
  );
}

export default App;
