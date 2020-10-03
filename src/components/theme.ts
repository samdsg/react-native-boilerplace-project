import {createText, createBox} from '@shopify/restyle';
import {moderateScale} from 'react-native-size-matters';
import {CUSTOMFONT} from './Helpers';
const CircurlarStdBold = require('../fonts/CircularStdBold.otf');
const CircurlarStdMedium = require('../fonts/CircularStdMedium.ttf');

const theme = {
  colors: {
    white: '#ffffff',
    primary: '#131A22',
    grey: '#818181',
    sgrey: '#4a4a4a',
    bgrey: '#555555',
    text: '#272829',
    orange: '#FEBD69',
  },
  spacing: {
    s: moderateScale(8),
    m: moderateScale(16),
    l: moderateScale(24),
    xl: moderateScale(40),
  },
  borderRadii: {
    s: moderateScale(4),
    m: moderateScale(10),
    l: moderateScale(25),
    xl: moderateScale(75),
  },
  textVariants: {
    title: {
      fontSize: CUSTOMFONT(35),
      fontFamily: CircurlarStdBold,
      color: 'white',
    },
    body: {
      fontSize: CUSTOMFONT(16),
      lineHeight: CUSTOMFONT(25),
      fontFamily: CircurlarStdMedium,
      color: 'text',
    },
    button: {
      fontSize: CUSTOMFONT(15),
      fontFamily: CircurlarStdBold,
      color: 'text',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
