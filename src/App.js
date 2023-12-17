import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { NAV_BAR } from './constants/nav-bar';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Clients from './pages/clients';
import Sup from './pages/sup';
import Contact from './pages/contact';
import AnimatedRoutes from './components/animated-routes';

function App() {
  return (
    <HashRouter>
      {/* <ul>
        <li>
          <Link to={NAV_BAR.HOME}>HOME</Link>
        </li>
        <li>
          <Link to={NAV_BAR.ABOUT}>About</Link>
        </li>
      </ul> */}
      <AnimatedRoutes></AnimatedRoutes>
    </HashRouter>
  );
}

export default App;
