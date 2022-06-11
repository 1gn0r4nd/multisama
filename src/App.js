import './assets/css/fonts.css';
import './assets/css/App.css';
import NavigationBar from './components/NavigationBar';
//import CarnageStatsPage from './pages/CarnageStatsPage';
import OrdersPage from './pages/OrdersPage';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="main">
      <OrdersPage />
      </div>
    </div>
  );
}

export default App;
