import FillEmptySpace from '../../components/fill-empty-space';
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
        <FillEmptySpace></FillEmptySpace>
        <BottomNavBar currentPage={NAV_BAR.SUP}></BottomNavBar>
      </div>
    </div>
  );
}
