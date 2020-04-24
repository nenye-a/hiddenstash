import AvenirRegular from '../../assets/fonts/AvenirLTStd-Book.otf';

import { THEME_COLOR, WHITE } from './colors';

let customTheme = {
  colors: {
    primary: THEME_COLOR,
  },
  fonts: {
    default: {
      normal: {
        name: 'Avenir',
        weight: '400' as '400',
        source: AvenirRegular,
      },
    },
  },
  uppercase: {
    button: false,
  },
  style: {
    button: {
      labelStyle: {
        fontSize: 10,
        color: WHITE,
      },
      contentStyle: {
        height: 21,
        minWidth: 60,
        width: 60,
      },
    },
  },
  roundness: 5,
};

export default customTheme;
