import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import { NAV_BAR } from './constants/nav-bar';
import Portfolio from './pages/portfolio';
import Clients from './pages/clients';
import Sup from './pages/sup';
import Contact from './pages/contact';

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
      <Routes>
        <Route path={NAV_BAR.HOME} element={<Home></Home>}></Route>
        <Route path={NAV_BAR.ABOUT} element={<About></About>}></Route>
        <Route
          path={NAV_BAR.PORTFOLIO}
          element={<Portfolio></Portfolio>}
        ></Route>
        <Route path={NAV_BAR.CLIENTS} element={<Clients></Clients>}></Route>
        <Route path={NAV_BAR.SUP} element={<Sup></Sup>}></Route>
        <Route path={NAV_BAR.CONTACT} element={<Contact></Contact>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
