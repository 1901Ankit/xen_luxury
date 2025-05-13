import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-datepicker/dist/react-datepicker.css';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <App />
    </Provider>
  
)
