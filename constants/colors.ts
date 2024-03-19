// Styles
import COLORS from '../styles/colors';

const tintColorLight = COLORS.primaryColor;
const tintColorDark = COLORS.whiteColor;

export default {
  light: {
    text: COLORS.blackColor,
    background: COLORS.whiteColor,
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: COLORS.whiteColor,
    background: COLORS.blackColor,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
