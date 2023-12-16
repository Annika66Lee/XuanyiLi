import './App.css';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import { NAV_BAR } from './const';
import About from './pages/about';

function App() {
  return (
    <HashRouter>
      <ul>
        <li>
          <Link to={NAV_BAR.Home}>HOME</Link>
        </li>
        <li>
          <Link to={NAV_BAR.ABOUT}>About</Link>
        </li>
      </ul>
      <Routes>
        <Route path={NAV_BAR.HOME} element={<Home></Home>}></Route>
        <Route path={NAV_BAR.ABOUT} element={<About></About>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
