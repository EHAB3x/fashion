import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import { Provider } from 'react-redux';
import { store } from './RTK/store.js';
register();
ReactDOM.createRoot(document.getElementById('root')).render(  
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)
