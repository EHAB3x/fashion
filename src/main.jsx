import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { register } from 'swiper/element/bundle';
import { AuthProvider } from './context/AuthContext.jsx';
register();
ReactDOM.createRoot(document.getElementById('root')).render(  
  <AuthProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </AuthProvider>
)
