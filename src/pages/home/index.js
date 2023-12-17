import { Link } from 'react-router-dom';
import './index.css';
import { cards } from '../../constants/nav-bar';
import { aboutIcon, homeIcon } from '../../imgs/imgs';

export default function Home() {
  return (
    <div className='main-content home'>
      {cards.map((card) => {
        if (card.title === 'Home') {
          return (
            <div
              className='card'
              style={{
                backgroundColor: card.backgroundColor,
                cursor: 'default',
              }}
            >
              <div className='picture'>
                <img src={homeIcon} alt='card icon'></img>
              </div>
              <h2
                className='title'
                style={{
                  borderBottom: '1px solid rgba(0, 0, 0, .19)',
                  color: 'black',
                }}
              >
                {card.title}
              </h2>
              <div
                className='description'
                style={{
                  color: 'black',
                }}
              >
                {card.description}
              </div>
            </div>
          );
        }
        return (
          <Link
            className='card'
            style={{
              backgroundColor: card.backgroundColor,
            }}
            to={card.path}
          >
            <div className='picture'>
              <img src={card.icon} alt='card icon'></img>
            </div>
            <h2 className='hiddenTitle' style={{ position: 'absolute' }}>
              Hello This is a {card.title} page
            </h2>
            <h2 className='title'>{card.title}</h2>
            <div className='description'>{card.description}</div>
          </Link>
        );
      })}
    </div>
  );
}
