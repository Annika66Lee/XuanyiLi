import { Link } from 'react-router-dom';
import { cards } from '../../constants/nav-bar';
import { AccessAlarms, Apps } from '@mui/icons-material';

import './index.css';
import { getNavBarIcon } from '../../utils/get-nav-bar-icon';
export default function NavBar(props) {
  const { currentPage } = props;
  console.log('current page', currentPage);
  return (
    <div className='nav-bar'>
      <div className='logo'>LOGO</div>
      {cards.map((card) => (
        <Link
          to={card.path}
          className={`option ${currentPage === card.path ? 'clicked' : ''}`}
        >
          <div className='icon'>{getNavBarIcon(card.path)}</div>
          <div className='text'>{card.title}</div>
        </Link>
      ))}
    </div>
  );
}
