import {
  hoverBlue,
  lightBlue,
  superLightBlue,
  darkRed,
  lightRed,
  lightGray,
  mainGray,
  darkGray,
  white,
  error,
  success,
  waiting,
} from './colors';

export default {
  primary: {
    light: superLightBlue,
    main: lightBlue,
    dark: hoverBlue,
    contrastText: lightGray,
  },
  secondary: {
    light: lightRed,
    main: lightRed,
    dark: darkRed,
    contrastText: lightGray,
  },
  gray: {
    light: lightGray,
    main: mainGray,
    dark: darkGray,
  },
  white: {
    main: white,
  },
  blue: {
    main: hoverBlue,
  },
  status: {
    error,
    success,
    waiting,
  },
};
