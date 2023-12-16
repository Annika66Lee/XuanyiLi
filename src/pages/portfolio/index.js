import FillEmptySpace from '../../components/fill-empty-space';
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
        <FillEmptySpace></FillEmptySpace>
        <BottomNavBar currentPage={NAV_BAR.PORTFOLIO}></BottomNavBar>
      </div>
    </div>
  );
}
