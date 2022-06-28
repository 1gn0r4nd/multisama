import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import OrdersPage from './pages/OrdersPage';
import PondsamaPage from './pages/PondsamaPage';
//https://reactrouter.com/docs/en/v6/upgrading/v5#relative-routes-and-links

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="orders" element ={<OrdersPage />} />
          <Route path="post" element = { <h1> Hi </h1> } />
          <Route path="pondsama" element = { <PondsamaPage /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
