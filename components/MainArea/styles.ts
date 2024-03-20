// Dependencies
import {StyleSheet} from 'react-native';

// Styles
import commonStyles from '../../styles/commonStyles';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: '70%',
  },
  container: {
    ...commonStyles.flexColumnSpaceBtn,
    ...commonStyles.p30,
    paddingBottom: 0,
    height: '100%',
    backgroundColor: COLORS.otherBgColor,
  },
});

export default styles;
