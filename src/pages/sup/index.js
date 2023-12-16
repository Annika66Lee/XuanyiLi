import NavBar from '../../components/nav-bar';
import BottomNavBar from '../../components/nav-bar-bottom';
import { NAV_BAR, cards } from '../../constants/nav-bar';

export default function Sup() {
  return (
    <div className='main-content'>
      <div
        className='main-container'
        style={{
          backgroundColor: cards.find((a) => a.path === NAV_BAR.SUP)
            .backgroundColor,
        }}
      >
        <NavBar currentPage={NAV_BAR.SUP}></NavBar>

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
        <BottomNavBar currentPage={NAV_BAR.SUP}></BottomNavBar>
      </div>
    </div>
  );
}
