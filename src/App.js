import './assets/css/fonts.css';
import './assets/css/App.css';
// import { Route, Routes } from 'react-router-dom';
// import CarnageStatsPage from './pages/CarnageStatsPage';
import NavigationBar from './components/NavigationBar';
import OrdersPage from './pages/OrdersPage';
import PondsamaPage from './pages/PondsamaPage';
import ChartsPage from './pages/ChartsPage';
import CarnageStatsPage from './pages/CarnageStatsPage';
import WalletPage from './pages/WalletPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavigationBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<OrdersPage />} />
          <Route path="orders" element ={<OrdersPage />} />
          <Route path="post" element = { <h1> Hi </h1> } />
          <Route path="pondsama" element = { <PondsamaPage /> } />
          <Route path="charts" element = { <ChartsPage /> } />
          <Route path="carnage" element = { <CarnageStatsPage /> } />
          <Route path="wallet" element = { <WalletPage /> } />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
