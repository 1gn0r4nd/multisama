import './assets/css/fonts.css';
import './assets/css/App.css';
import NavigationBar from './components/NavigationBar';
import CarnageStatsPage from './pages/CarnageStatsPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
      <CarnageStatsPage />
      </div>
    </div>
  );
}

export default App;
