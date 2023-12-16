import FillEmptySpace from '../../components/fill-empty-space';
import NavBar from '../../components/nav-bar';
import BottomNavBar from '../../components/nav-bar-bottom';
import { NAV_BAR, cards } from '../../constants/nav-bar';

export default function Contact() {
  return (
    <div className='main-content'>
      <div
        className='main-container'
        style={{
          backgroundColor: cards.find((a) => a.path === NAV_BAR.CONTACT)
            .backgroundColor,
        }}
      >
        <NavBar currentPage={NAV_BAR.CONTACT}></NavBar>
        <FillEmptySpace></FillEmptySpace>
        <BottomNavBar currentPage={NAV_BAR.CONTACT}></BottomNavBar>
      </div>
    </div>
  );
}
