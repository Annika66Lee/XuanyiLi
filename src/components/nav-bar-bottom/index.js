import { Link } from 'react-router-dom';
import { cards } from '../../constants/nav-bar';
import './index.css';
import { getNavBarIcon } from '../../utils/get-nav-bar-icon';
export default function BottomNavBar(props) {
  const { currentPage } = props;
  return (
    <div className='bottom-nav-bar'>
      <div className='left'>
        <h1>Title</h1>
        <h3>sub title</h3>
        <text>description</text>
      </div>
      <div className='right'>
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
    </div>
  );
}
