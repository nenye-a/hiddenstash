import AvenirBook from '../../assets/fonts/AvenirLTStd-Book.otf';
import AvenirMedium from '../../assets/fonts/AvenirLTStd-Medium.otf';
import AvenirHeavy from '../../assets/fonts/AvenirLTStd-Heavy.otf';

import { THEME_COLOR, WHITE, TEXT_COLOR } from './colors';

let customTheme = {
  colors: {
    primary: THEME_COLOR,
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
        marginBottom: 20,
      },
    },
  },
  roundness: 5,
};

export default customTheme;
