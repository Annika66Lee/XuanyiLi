import {
  aboutIcon,
  clientsIcon,
  contactIcon,
  portfolioIcon,
  supIcon,
} from '../imgs/imgs';

export const NAV_BAR = {
  HOME: '/',
  ABOUT: '/about',
  PORTFOLIO: '/portfolio',
  CLIENTS: '/clients',
  SUP: '/sup',
  CONTACT: '/contact',
};

export const cards = [
  {
    title: 'Home',
    description: 'Brief introduction',
    backgroundColor: 'white',
    path: NAV_BAR.HOME,
    icon: '',
  },
  {
    title: 'About',
    description: 'About Page',
    backgroundColor: '#338545',
    path: NAV_BAR.ABOUT,
    icon: aboutIcon,
  },
  {
    title: 'Portfolio',
    description: 'Portfolio page',
    backgroundColor: '#054244',
    path: NAV_BAR.PORTFOLIO,
    icon: portfolioIcon,
  },
  {
    title: 'Clients',
    description: 'Clients page',
    backgroundColor: '#0045c3',
    path: NAV_BAR.CLIENTS,
    icon: clientsIcon,
  },
  {
    title: 'Sup',
    description: 'Sup page',
    backgroundColor: '#011e64',
    path: NAV_BAR.SUP,
    icon: supIcon,
  },
  {
    title: 'Contact',
    description: 'Contact introduction',
    backgroundColor: '#000e33',
    path: NAV_BAR.CONTACT,
    icon: contactIcon,
  },
];
