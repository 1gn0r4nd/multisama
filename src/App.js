// import logo from './logo.svg';
import './App.css';
import './assets/css/fonts.css';
import NavigationBar from './components/Navigation Bar/NavigationBar';
import MoonsamaCarnageStats from './components/Carnage Stats/MoonsamaCarnageStats';
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <h1>Pondsama</h1>
      <MoonsamaCarnageStats value='1gn0r4nd'/>
    </div>
  );
}

export default App;
