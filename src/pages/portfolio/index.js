import NavBar from '../../components/nav-bar';
import BottomNavBar from '../../components/nav-bar-bottom';
import { NAV_BAR, cards } from '../../constants/nav-bar';

export default function Portfolio() {
  return (
    <div className='main-content'>
      <div
        className='main-container'
        style={{
          backgroundColor: cards.find((a) => a.path === NAV_BAR.PORTFOLIO)
            .backgroundColor,
        }}
      >
        <NavBar currentPage={NAV_BAR.PORTFOLIO}></NavBar>

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
        <BottomNavBar currentPage={NAV_BAR.PORTFOLIO}></BottomNavBar>
      </div>
    </div>
  );
}
