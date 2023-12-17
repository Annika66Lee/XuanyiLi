import { Route, Routes, useLocation } from 'react-router-dom';
import { NAV_BAR } from '../../constants/nav-bar';
import { AnimatePresence } from 'framer-motion';
import Home from '../../pages/home';
import About from '../../pages/about';
import Portfolio from '../../pages/portfolio';
import Clients from '../../pages/clients';
import Sup from '../../pages/sup';
import Contact from '../../pages/contact';

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
}
