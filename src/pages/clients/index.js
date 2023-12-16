import NavBar from '../../components/nav-bar';
import BottomNavBar from '../../components/nav-bar-bottom';
import { NAV_BAR, cards } from '../../constants/nav-bar';

export default function Clients() {
  return (
    <div className='main-content'>
      <div
        className='main-container'
        style={{
          backgroundColor: cards.find((a) => a.path === NAV_BAR.CLIENTS)
            .backgroundColor,
        }}
      >
        <NavBar currentPage={NAV_BAR.CLIENTS}></NavBar>
        <div
          style={{
            height: '200px',
            width: '100%',
            backgroundColor: 'white',
          }}
        ></div>
        <div
          style={{
            height: '200px',
            width: '100%',
            backgroundColor: 'white',
          }}
        ></div>
        <div
          style={{
            height: '200px',
            width: '100%',
            backgroundColor: 'white',
          }}
        ></div>
        <BottomNavBar currentPage={NAV_BAR.CLIENTS}></BottomNavBar>
      </div>
    </div>
  );
}
