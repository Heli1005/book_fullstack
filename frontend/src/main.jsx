import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './components/redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>

      <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
