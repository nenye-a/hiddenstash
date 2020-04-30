import AvenirBook from '../../assets/fonts/Avenir-Book.otf'; // change the source
import AvenirMedium from '../../assets/fonts/Avenir-Medium.otf';
import AvenirHeavy from '../../assets/fonts/Avenir-Heavy.otf';

import { THEME_COLOR, WHITE, ACCENT_COLOR } from './colors';

let customTheme = {
  colors: {
    primary: THEME_COLOR,
    accent: ACCENT_COLOR,
  },
  fonts: {
    default: {
      normal: {
        name: 'Avenir',
        weight: '400' as '400',
        source: AvenirBook,
        size: 15,
      },
      medium: {
        name: 'Avenir-Medium',
        weight: '600' as '600',
        source: AvenirMedium,
        size: 15,
      },
      bold: {
        name: 'Avenir-Bold',
        weight: 'bold' as 'bold',
        source: AvenirHeavy,
        size: 15,
      },
    },
  },
  uppercase: {
    button: false,
  },
  style: {
    button: {
      labelStyle: {
        fontSize: 15,
        color: WHITE,
        fontWeight: '400',
      },
      contentStyle: {
        height: 40,
        maxHeight: 40,
        minWidth: 96,
        width: 96,
      },
    },
    textInput: {
      containerStyle: {
        maxHeight: 40,
        height: 40,
        marginBottom: 10,
      },
      errorMessageStyle: {
        padding: 0,
        marginBottom: 10,
      },
    },
  },
  roundness: 5,
};

export default customTheme;
