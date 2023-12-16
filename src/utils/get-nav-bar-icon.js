import {
  AccountBox,
  Apps,
  Call,
  Diversity1,
  Group,
  Public,
} from '@mui/icons-material';
import { NAV_BAR } from '../constants/nav-bar';

export const getNavBarIcon = (navBar) => {
  switch (navBar) {
    case NAV_BAR.HOME:
      return <Apps></Apps>;
    case NAV_BAR.ABOUT:
      return <AccountBox></AccountBox>;
    case NAV_BAR.PORTFOLIO:
      return <Group></Group>;
    case NAV_BAR.CLIENTS:
      return <Diversity1></Diversity1>;
    case NAV_BAR.SUP:
      return <Public></Public>;
    case NAV_BAR.CONTACT:
      return <Call></Call>;
    default:
      return <Apps></Apps>;
  }
};
