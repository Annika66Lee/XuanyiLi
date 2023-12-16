import NavBar from '../../components/nav-bar';
import BottomNavBar from '../../components/nav-bar-bottom';
import { NAV_BAR, cards } from '../../constants/nav-bar';

export default function About() {
  return (
    <div className='main-content'>
      <div
        className='main-container'
        style={{
          backgroundColor: cards.find((a) => a.path === NAV_BAR.ABOUT)
            .backgroundColor,
        }}
      >
        <NavBar currentPage={NAV_BAR.ABOUT}></NavBar>

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
        <BottomNavBar currentPage={NAV_BAR.ABOUT}></BottomNavBar>
      </div>
    </div>
  );
}
